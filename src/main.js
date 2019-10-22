import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import VueBus from 'vue-bus'
Vue.use(VueBus)

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

import axios from "axios";
axios.defaults.withCredentials = true;

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
