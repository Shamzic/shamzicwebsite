<template>
  <footer>
    <p> {{ copyright }} {{ year }} {{ title }}</p>
  </footer>
</template>

<script>
/* eslint-disable */
import { bus } from '../main'

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: "Copyrights",
      year: null
    }
  },
  created () {
    // Get current year
    var today = new Date()
    this.year= today.getFullYear()
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
  margin:60px auto 45px;
  width: 90%;
}
p {
  color: lightblue;
  text-align: center;
}
</style>
