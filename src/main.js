import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import './assets/theme/theme-green/index.css'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import router from './views/router'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

import qs from 'qs'
import md5 from 'js-md5'
import Cookies from 'js-cookie'


Vue.use(ElementUI)
Vue.use(Vuex)


Vue.prototype.qs = qs
Vue.prototype.md5 = md5
Vue.prototype.Cookies = Cookies


//NProgress.configure({ showSpinner: false });

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

