// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

import './style/main.less'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 2,
  listenEvents: ['scroll']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
