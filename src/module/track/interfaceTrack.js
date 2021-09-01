/*存放接口埋点*/

//统一模版函数处理
const defaultTrack = {
	getTrackType: function (resp) {
		let rp = resp?.data || {}
		if (rp?.code == 200) {
			return "success"
		} else {
			return "error"
		}
	},
	getTrackValue: function (resp, params) {
		let reqParams = JSON.parse(resp.config.data || "{}")
		return {
			...params,
			value: {
				_pageName: location.href,
				_params: {name: reqParams.name},
				_response: resp
			}
		}
	}
}

//具体埋点处理
export default {
	init: {
		getTrackType: defaultTrack.getTrackType,
		getTrackValue: defaultTrack.getTrackValue,
		success: {
			value: ""
		},
		error: {
			value: ""
		},
	}
}