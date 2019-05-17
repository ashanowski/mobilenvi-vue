// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSession from 'vue-session'
import Vuetify from 'vuetify'

Vue.use(VueSession)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
