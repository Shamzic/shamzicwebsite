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
display: table;
margin: 0 auto;
}
h2 {
  font-weight: bold;
  margin-left: 75px;
  margin-bottom: 10px;
  margin-top: 0px;
}

img {
  height: 400px;
}
</style>
