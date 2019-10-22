import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入一级路由页面

import Layout from '../layouts/Layout.vue';
// import Sider from '../layouts/Sider.vue';

import Home from "../views/Home.vue"
import ContactUs from "../views/ContactUs.vue"
import Plan from "../views/Plan.vue"
import Flowcard from "../views/Flowcard.vue"
import Platform from "../views/Platform.vue"
import Search from "../views/Search.vue"

import HelpCenter from "../views/HelpSupport/HelpCenter.vue"
import DevCenter from "../views/HelpSupport/DevCenter.vue"
import Shutdown from "../views/HelpSupport/Shutdown.vue"
import Notice from "../views/HelpSupport/Notice.vue"
import ApiWord from "../views/HelpSupport/ApiWord.vue"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"


export default new Router({
	linkActiveClass: 'active',
	mode: "history",
	routes: [
		{
			path: '/',
			component: Layout, 
			children: [
				{ 
					path: '/', 
					name: 'home', 
					component: Home,
				},
				{ 
					path: '/contactUs',
					name: 'contactUs', 
					component: ContactUs 
				},
				{ 
					path: '/flowcard',
					name: 'flowcard', 
					component: Flowcard 
				},
				{ 
					path: '/platform',
					name: 'platform', 
					component: Platform 
		
				},
				{ 
					path: '/plan', 
					name: 'plan', 
					component: Plan 
				},
				{ 
					path: '/search', 
					name: 'search', 
					component: Search 
				},
				{ 
					path: '/helpCenter', 
					name: 'helpCenter', 
					component: HelpCenter 
				},
				{ 
					path: '/devCenter', 
					name: 'devCenter', 
					component: DevCenter 
				},
				{ 
					path: '/shutdown', 
					name: 'shutdown', 
					component: Shutdown 
				},
				{ 
					path: '/notice', 
					name: 'notice', 
					component: Notice 
				},
				{ 
					path: '/apiWord', 
					name: 'apiWord', 
					component: ApiWord 
				}
			]
		},	
		{ 
			path: '/login', 
			name: 'login', 
			component: Login 
		},
		{ 
			path: '/register', 
			name: 'register', 
			component: Register 
		},
		{ 
			path: '*',
			redirect: '/' 
		}
	],

	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})