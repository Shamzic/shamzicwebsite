<template>
  <div class="hello">
    <img src="../assets/Photo-Presentation.jpg" alt="">
  <br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-left: 5%;
  margin-right: 5%;
}

img {
  width: 100%;
}

</style>
