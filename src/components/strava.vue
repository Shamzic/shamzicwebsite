
<template>
  <div id="strava" class="strava">
    <!-- <div id="odometer" class="odometer"></div> -->
    <div>
      <p class="km">
      {{ summ }} km by bike in {{ year }}
      </p>
    </div>
    <img src="../assets/bicycle-facing-right.png" alt="">
  </div>
</template>

<script>
/* eslint-disable */

export default {

  data () {
    return {
      summ: null,
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
      var sum = null
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

    var today = new Date()
    this.year= today.getFullYear()

  },
}
</script>

<style scoped>

.strava {
  display: table;
  margin-left: 0%;
  margin-top: 50%;
  margin-bottom: 50%;
}

@media screen and (max-width: 600px) {
  .strava {
    margin-top: 1%;
  }
}

img {
  margin-left: 40%;
  margin-right: 50%;
}

.km {
  font-size: 30px;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 2%;
  -webkit-animation: lightSpeedIn 1s;
  animation: lightSpeedIn 1s;
  text-align: center;
}

</style>
