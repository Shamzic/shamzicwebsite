<template>
  <footer>
    <p> {{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: "Copyrights 2018 S-Hamery creations"
    }
  },
  created () {
;
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightblue;
  text-align: center;
}
</style>
