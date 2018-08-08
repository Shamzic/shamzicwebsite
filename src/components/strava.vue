
<template>
  <div id="strava" class="strava">
    <router-view/>
    <div id="odometer" class="odometer"></div>
    <p>
      kilometers traveled by bike in {{ year }}
    </p>
    <img src="../assets/bicycle-facing-right.png" alt="">
  </div>
</template>

<script>
/* eslint-disable */

export default {

  data () {
    return {
      summ: 0,
      year: null
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
    setTimeout(function(){
      odometer.innerHTML = vueInstance.summ;
    }, 1000);

    var today = new Date()
    this.year= today.getFullYear()

  },
}
</script>

<style scoped>

.strava {
  display: table;
  margin: 0 auto;
}

.odometer {

    font-size: 80px;
    padding-left: 110px;
    padding-top: 40px;
}

p {
  font-family: 'Oswald', sans-serif;
  font-size: 30px;
  font-weight: lighter;
}
img {
  margin-left: 40%;
}
</style>
