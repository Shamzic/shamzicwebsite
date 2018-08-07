
<template>
  <div id="app">
    <router-view/>

    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <p> {{ summ }} km on bike in 2018</p>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
/* eslint-disable */

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas
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
      title: "Shamzic's website",
      summ: 0
    }
  },
  created () {
    var vueInstance = this
    var strava = require('strava-v3')
    strava.athlete.get({ 'access_token': 'c5d93b662526cd70b2d327480692c392fd7be6d3', 'id' : '16474919'}, function (err, payload, limits) {
    if (!err) {
      console.log(payload)
      console.log(payload.bikes)
      var bikeArray = payload.bikes
      var sum = 0
      bikeArray.forEach ((element, index, array) => {
        console.log(element.distance)
        sum = sum + element.distance
      })
      console.log(sum/1000)
      vueInstance.summ = (sum/1000).toFixed(1)
    } else {
      console.log(err)
    }
    })
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>

</style>
