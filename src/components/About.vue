<template>
  <div id="about" class="about">
    <app-strava></app-strava>
  </div>
</template>

<script>
/* eslint-disable */

import Strava from './strava.vue'
export default {
  components: {
    'app-strava':Strava
  },
  data () {
    return {
    }
  },
  created () {

  },
  }
  </script>

  <style scoped>

  .about {
  display: table;
  margin: 0 auto;
  }

  </style>
