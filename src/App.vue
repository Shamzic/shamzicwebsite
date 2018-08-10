
<template>
  <div id="app">

    <app-header v-bind:title="title"></app-header>
    <router-view></router-view>
    <app-footer class="footer" v-bind:title="title"></app-footer>
  </div>
</template>

<script>
/* eslint-disable */

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import formHelper from './components/formHelper.vue'

import Cv from './components/Cv.vue'
import About from './components/About.vue'
import Strava from './components/strava.vue'

export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
    'form-helper':formHelper,
    'app-strava':Strava,
    'app-about':About,
    'Cv':Cv
  },
  data () {
    return {
      title: "Simon Hamery",
      summ: 0
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
footer {
}
</style>
