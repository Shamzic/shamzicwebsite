
<template>
  <div id="app">
    <router-view/>

    <app-header v-bind:title="title"></app-header>
    <app-strava></app-strava>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
/* eslint-disable */

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import formHelper from './components/formHelper.vue'
import Strava from './components/strava.vue'

export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
    'form-helper':formHelper,
    'app-strava':Strava
  },
  data () {
    return {
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
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

</style>
