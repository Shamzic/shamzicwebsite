<template>
  <div class="hello">

    <h2>Welcome on my website</h2><br>
    <div class="container">
      <img src="../assets/Photo-Presentation.jpg" alt="">
          <div class="text">
            <p style="text-indent: 5%;"> I created this website in 2018 in order to keep track of my work. During this year, I will finish
            my master degree in compter science at the UQAC (Université du Québec à Chicoutimi).</p>
            <p>In the menu, you will get access to my CV online, my differents works (also available on GitHub) and a page
              related to my passion; bicycle.
            </p>
            <p>In the footer, you will get link through some button to different social media as Linkedin, Strava, and YouTube.
            There is also a button with all of my work on my GitHub account.</p>
          </div>
    </div>

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

h2 {
  font-family: 'Permanent Marker';
  margin-top: -2%;
  margin-left: 40%;
  margin-right: 30%;
}

.container{
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
}

img {
  width: 45%;
  height: 45%;
  float: none;
}

.text, img {
  font-family: 'Raleway', sans-serif;
  margin-right: 5%;
  margin-left: 5%;
}
</style>
