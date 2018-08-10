
<template>
  <div id="app">
    <div id="parent" class="parent">
      <div id="enfant" class="enfant">
    <app-header v-bind:title="title"></app-header>

        <router-view></router-view>

    <app-footer class="footer" v-bind:title="title"></app-footer>
  </div>
</div>
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

.parent{
 height: 100%;
 width: 100%;
 overflow: hidden;
}
.enfant{
 width: 100%;
 height: 100%;
 overflow: auto;
 padding-right: 15px; /* Il faut varier cette variable en fonction du navigateur utilisé (la barre de défilement n'a pas toujours la même largeur) */
}

.footer {
  position:fixed;
  bottom:0;
}
</style>
