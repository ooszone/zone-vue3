//import md5 from 'md5'

/**
 * 导出公共方法
 */
export default {
	/**
	 * json转换为GET请求URL拼接的格式
	 * @param json
	 * @returns {string}
	 */
	jsonToQueryString: (json) => {
		json = json || {}
		return '?' +
			Object.keys(json).map(function (key) {
				return encodeURIComponent(key) + '=' +
					encodeURIComponent(json[key]);
			}).join('&');
	},
	jsonToHrefString: (json) => {
		return '/' +
			Object.keys(json).map(function (key) {
				return encodeURIComponent(json[key])
			}).join('/');
	},
	getQueryString: (name) => {
		let reg = `(^|&)${name}=([^&]*)(&|$)`
		let r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	/**
	 * @desc 转换json为graphql请求格式
	 * @param type 操作类型
	 * @param method 请求方法
	 * @param queryJson 请求对象
	 * @param resp 请求返回格式
	 * @return {string} 请求格式字符串
	 */
	jsonToGraphQLQueryString: function (type, method, queryJson, resp) {
		let getQueryStrByJsonObj = function (obj) {
			return Object.keys(obj).map(function (key) {
				let getValueStr = function (value) {
					let type = typeof value;
					let rtnObj = {
						"string": function () {
							return '"' + value + '"'
						},
						"object": function () {
							if (value instanceof Array) {
								return JSON.stringify(value);
							} else {
								return "{" + getQueryStrByJsonObj(value) + "}"
							}
						},
						"number": function () {
							return value;
						}
					};
					return (rtnObj[type] || function () {
					})();
				};
				return (key + ':' + getValueStr(obj[key]));
			}).join(',');
		};
		
		let queryStr = getQueryStrByJsonObj(queryJson);
		queryStr = queryStr === "" ? "" : "(" + queryStr + ")";
		
		return `${type}{
					${method}${queryStr}{
						${resp}
					}
				}`
	},
	getUrlParams: function () {
		let pram = window.location.search.substr(1);
		pram = pram.split("&");
		let params = {};
		for (let index in pram) {
			let arr = pram[index].split("=");
			params[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
		}
		return params
	},
	format: function (date, format) {
		if (typeof date == 'string') {
			date = this.parseDate(date);
		} else {
			date = new Date(date);
		}
		let o = {
			"M+": date.getMonth() + 1,
			"d+": date.getDate(),
			"h+": date.getHours(),
			"m+": date.getMinutes(),
			"s+": date.getSeconds(),
			"q+": Math.floor((date.getMonth() + 3) / 3),
			"S": date.getMilliseconds()
		};
		
		let w = [
			['日', '一', '二', '三', '四', '五', '六'],
			['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
			['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
		];
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(w+)/.test(format)) {
			format = format.replace(RegExp.$1, w[RegExp.$1.length - 1][date.getDay()]);
		}
		for (let k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	},
	parseDate: function (date) {
		return new Date(Date.parse(date.replace(/-/g, "/")));
	},
	/**
	 * 生成签名并在签名中添加salt
	 * @param paraStr
	 * @returns {*}
     //  */
	// getSign: (paraStr) => {
	// 	let salt = "oooooo100234~^jksdsvfbdfb^''sdfsk fsdf";
	// 	let str = paraStr + salt;
	// 	return md5(str)
	// }
};
