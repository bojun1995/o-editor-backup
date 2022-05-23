import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

// style
import '@/styles/index.scss'
// vuex
import store from './store'
Vue.prototype.$store = store
// utils
import utils from './utils'
Vue.prototype.$utils = utils

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
