import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'

import './style/main.less'

Vue.use(VueAgile)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})