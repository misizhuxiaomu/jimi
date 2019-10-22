import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import querystring from "querystring"

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {
		searchData:[
			{ title: "首页", name: "home", doType: 1},
			{ title: "通用流量卡，定向流量卡", name: "flowcard", doType: 1},
			{ title: "运营平台-CMP系统", name: "platform", doType: 1},
			{ title: "解决方案", name: "plan", doType: 1},
			{ title: "联系我们，咨询", name: "contactUs", doType: 1},
			{ title: "帮助中心", name: "helpCenter", doType: 1},
			{ title: "开发者中心", name: "devCenter", doType: 1},
			{ title: "常见问题", name: "shutdown", doType: 1},
			{ title: "API文档", name: "apiWord", doType: 1},
			{ title: "公告", name: "notice", doType: 1},
			{ title: "停机续费", name: "shutdown", ids: "#B1", doType: 2, con: "卡停机的触发条件   卡的有效期过期或流量用超，都会被自动停机......"},
			{ title: "卡停机的触发条件", name: "shutdown", ids: "#B2", doType: 2, con: "您可以通过公众号查询有效期或剩余流量......"},
			{ title: "解除停机的条件", name: "shutdown", ids: "#B3", doType: 2, con: "有效期过期，需通过续费才能继续使用......"},
			{ title: "续费或购买叠加包", name: "shutdown", ids: "#B4", doType: 2, con: "您可以通过公众号菜单“流量查询”......"},
			{ title: "结算时间", name: "shutdown", ids: "#B5", doType: 2, con: "您可以通过公众号菜单 - 流量查询进入查询页面......"},
			{ title: "移动", name: "shutdown", ids: "#B6", doType: 2, con: "您可以通过公众号菜单 - 流量查询进入查询页面......"},
			{ title: "联通", name: "shutdown", ids: "#B7", doType: 2, con: "您可以通过公众号菜单 - 流量查询进入查询页面......"},
			{ title: "超流量续费规则", name: "shutdown", ids: "#B8", doType: 2, con: "流量在使用过程中，用超流量会按停机处理。但在流量监控和停机处理过程中......"},
			{ title: "通用说明", name: "apiWord", ids: "#C1", doType: 2, con: "开发者接入SIM开放平台api之后，无论是正确返回结果还是错误提示都以JSON格式返回......"},
			{ title: "公共约定", name: "apiWord", ids: "#C2", doType: 2, con: "1) 编码 UTF-8 编码。2) 摘要算法采用MD5进行加密......"},
			{ title: "结果说明", name: "apiWord", ids: "#C3", doType: 2, con: "开发者接入SIM开放平台api之后，无论是正确返回结果还是......"},
			{ title: "错误码", name: "apiWord", ids: "#C4", doType: 2, con: "您可以通过公众号菜单“流量查询”......"},
			{ title: "API列表", name: "apiWord", ids: "#C5", doType: 2, con: "jimi.openapi.auth.accessToken，Token获取......"},
			{ title: "通用参数", name: "apiWord", ids: "#C6", doType: 2, con: "进行接口调用的时候都需要发送通用参数，开放平台会对参数进行校验......"},
			{ title: "加密过程", name: "apiWord", ids: "#C7", doType: 2, con: "参数在传输过程确保参数不被篡改，提供md5摘要算法进行验证，参数加密过程如下......"},
			{ title: "平台参数", name: "apiWord", ids: "#C8", doType: 2, con: "app_key。平台提供......"},
			{ title: "API详情", name: "apiWord", ids: "#A1", doType: 2, con: "接入api需要进行token验证（获取Token除外），Token验证是利用JWT在网关层进行用户拦截......"},
			{ title: "获取token", name: "apiWord", ids: "#A2", doType: 2, con: "接入api需要进行token验证（获取Token除外），Token验证是利用JWT在网关层进行用户拦截......"},
			{ title: "获取单张卡信息", name: "apiWord", ids: "#A3", doType: 2, con: "提供单个卡数据查询，用户提供卡号、 iccid、 msisdn进行查询......"},
			{ title: "获取批量卡数据", name: "apiWord", ids: "#A4", doType: 2, con: "1.查询的批量卡号必须同时是卡号、iccid、msisdn,不能一部分是iccid,一部分是卡号，必须统一......"},
			{ title: "获取卡套餐和叠加包信息", name: "apiWord", ids: "#A5", doType: 2, con: "用户输入SIM卡号，可以获取该卡的套餐信息以及绑定的叠加包信息。......"},
			{ title: "发送短信", name: "apiWord", ids: "#A6", doType: 2, con: "发送短信是用户提供批量卡号，进行发送短信，短信会有延时......"},
			{ title: "批量停开机", name: "apiWord", ids: "#A7", doType: 2, con: "用户提供批量号码，要保证当前这批卡号隶属于当前用户或者下一级用户......"},
			{ title: "单卡停开机", name: "apiWord", ids: "#A8", doType: 2, con: "单卡停开机和批量基本相同，唯一区别在于只能操作一张卡......"},
			{ title: "SIM卡续费（记账支付）", name: "apiWord", ids: "#A9", doType: 2, con: "SIM可以进行续费办理，每张卡都绑定固定的套餐，续费金额为套餐代理价格......"},
			{ title: "查询续费订单结果（记账支付）", name: "apiWord", ids: "#A10", doType: 2, con: "SIM进行续费办理之后可以进行续费详情查询，查询返回结果包含订单数据和......"},
			{ title: "SIM卡叠加包续费（记账支付）", name: "apiWord", ids: "#A11", doType: 2, con: "Sim卡套餐绑定了多个叠加包，开放api可以指定某一个节叠加包进行续费......"},
			{ title: "批量套餐获取对应的叠加包信息", name: "apiWord", ids: "#A12", doType: 2, con: "输入批量套餐编号，套餐id使用逗号(,)隔开，返回每个套餐对应绑定的叠加包数据......"},
			{ title: "SIM卡续费创建订单（扫码支付）", name: "apiWord", ids: "#A13", doType: 2, con: "卡续费支持批量卡同时续费(同时支持1000张,逗号隔开),仅支持微信和支付宝......"},
			{ title: "根据订单号获取二维码（扫码支付）", name: "apiWord", ids: "#A14", doType: 2, con: "创建订单后，根据订单号获取二维码，获取二维码的api可以变更支付类型......"},
			{ title: "支付之后通知支付（扫码支付）", name: "apiWord", ids: "#A15", doType: 2, con: "调用者得到回调之后，需要通知支付来表明已经接收到回调(否则在一定时间内......"},
			{ title: "SIM叠加包创建订单（扫码支付）", name: "apiWord", ids: "#A16", doType: 2, con: "用户可以选用相同套餐的一批卡号，选择对应的叠加包作为一组数据，同时可以传多组......"}
			
		],
		listSearch: []
	},
	mutations: {
		changeSearchdata( state, payload ){
			state.listSearch = payload.listSearch
			// sessionStorage.setItem("search",payload.listSearch); //以“key”为名称存储一个值“value”
		}
	},
	actions: {
		changeSearchdata( {commit}, {listSearch} ){
			commit( "changeSearchdata", {listSearch} )
		}
	}
})
