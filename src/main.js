// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ninjas from './components/Ninjas.vue'
/* eslint-disable */

Vue.component('ninjas', Ninjas)

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
