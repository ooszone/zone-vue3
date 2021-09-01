//关于前端性能指标，W3C 定义了强大的 Performance API，
//其中又包括了
//High Resolution Time 、
//Frame Timing 、
//Navigation Timing 、
//Performance Timeline 、
//Resource Timing 、
//User Timing 等诸多具体标准。

//拿到Performance并且初始化一些参数
let timing = performance.timing,
	start = timing.navigationStart,
	dnsTime = 0,
	tcpTime = 0,
	firstPaintTime = 0,
	domRenderTime = 0,
	loadTime = 0;
//根据提供的api和属性，拿到对应的时间
dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
tcpTime = timing.connectEnd - timing.connectStart;
firstPaintTime = timing.responseStart - start;
domRenderTime = timing.domContentLoadedEventEnd - start;
loadTime = timing.loadEventEnd - start;

console.log('DNS解析时间:', dnsTime,
	'\nTCP建立时间:', tcpTime,
	'\n首屏时间:', firstPaintTime,
	'\ndom渲染完成时间:', domRenderTime,
	'\n页面onload时间:', loadTime);


const base = {
	log() {
	},
	logPackage() {
	},
	getLoadTime() {
	},
	getTimeoutRes() {
	},
	bindEvent() {
	},
	init() {
	}
}

const pm = (function () {
	// 向前兼容
	if (!window.performance) return base
	const pMonitor = {...base}
	let config = {}
	const SEC = 1000
	const TIMEOUT = 10 * SEC
	const setTime = (limit = TIMEOUT) => time => time >= limit
	const getLoadTime = ({startTime, responseEnd}) => responseEnd - startTime
	const getName = ({name}) => name
	// 生成表单数据
	const convert2FormData = (data = {}) =>
		Object.entries(data).reduce((last, [key, value]) => {
			if (Array.isArray(value)) {
				return value.reduce((lastResult, item) => {
					lastResult.append(`${key}[]`, item)
					return lastResult
				}, last)
			}
			last.append(key, value)
			return last
		}, new FormData())
	// 拼接 GET 时的url
	const makeItStr = (data = {}) =>
		Object.entries(data)
			.map(([k, v]) => `${k}=${v}`)
			.join('&')
	pMonitor.getLoadTime = () => {
		const [{domComplete}] = performance.getEntriesByType('navigation')
		return domComplete
	}
	pMonitor.getTimeoutRes = (limit = TIMEOUT) => {
		const isTimeout = setTime(limit)
		const resourceTimes = performance.getEntriesByType('resource')
		return resourceTimes
			.filter(item => isTimeout(getLoadTime(item)))
			.map(getName)
	}
	// 上报数据
	pMonitor.log = (url, data = {}, type = 'POST') => {
		const method = type.toLowerCase()
		const urlToUse = method === 'get' ? `${url}?${makeItStr(data)}` : url
		const body = method === 'get' ? {} : {body: convert2FormData(data)}
		const init = {
			method,
			...body
		}
		fetch(urlToUse, init).catch(e => console.log(e))
	}
	// 封装一个上报两项核心数据的方法
	pMonitor.logPackage = () => {
		const {url, timeoutUrl, method} = config
		const domComplete = pMonitor.getLoadTime()
		const timeoutRes = pMonitor.getTimeoutRes(config.timeout)
		// 上报页面加载时间
		pMonitor.log(url, {domeComplete}, method)
		if (timeoutRes.length) {
			pMonitor.log(
				timeoutUrl,
				{
					timeoutRes
				},
				method
			)
		}
	}
	// 事件绑定
	pMonitor.bindEvent = () => {
		const oldOnload = window.onload
		window.onload = e => {
			if (oldOnload && typeof oldOnload === 'function') {
				oldOnload(e)
			}
			// 尽量不影响页面主线程
			if (window.requestIdleCallback) {
				window.requestIdleCallback(pMonitor.logPackage)
			} else {
				setTimeout(pMonitor.logPackage)
			}
		}
	}
	
	/**
	 * @param {object} option
	 * @param {string} option.url 页面加载数据的上报地址
	 * @param {string} option.timeoutUrl 页面资源超时的上报地址
	 * @param {string=} [option.method='POST'] 请求方式
	 * @param {number=} [option.timeout=10000]
	 */
	pMonitor.init = option => {
		const {url, timeoutUrl, method = 'POST', timeout = 10000} = option
		config = {
			url,
			timeoutUrl,
			method,
			timeout
		}
		// 绑定事件 用于触发上报数据
		pMonitor.bindEvent()
	}
	
	return pMonitor
})()

export default pm
