<template>
  <header>
    <h1  v-on:click="changeTitle"> {{ title }}</h1>
  </header>
</template>

<script>
/* eslint-disable */

export default {
  props : {
    title: {
      type: String
    }
  },
  data () {
    return {
      title: "S-Hamery creations"
    }
  },
  methods: {
    changeTitle: function () {
      this.$emit('changeTitle', 'Vue Wizards');
    }
  }
}
</script>

<style scoped>
header {
  background: lightblue;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
