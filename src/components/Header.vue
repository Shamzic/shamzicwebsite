<template>
  <body>
    <header>
      <div class="animated jackInTheBox 4s">
        <h1> {{ title }}</h1>
      </div>
      <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
          <router-link class="home" v-on:click.native="makeActive('home')" to="/">HOME</router-link>
          <router-link class="cv" v-on:click.native="makeActive('cv')" to="/Cv">CV</router-link>
          <router-link class="realisations" v-on:click.native="makeActive('realisations')" to="/Realisations">Realisations</router-link>
          <router-link class="about" v-on:click.native="makeActive('about')" to="/About">About</router-link>
        </nav>
        <!-- <p>You chose <b>{{ active }}</b></p> -->
      </div>

    </header>
  </body>

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
      active: 'home'
    }
  },
  methods: {
    makeActive: function(item){
        this.active = item;
    }
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}

header {
  padding: 10px;
}

h1 {
  color: #222;
  margin-top: 10px;
  padding-left: 50px;
  font-family: 'Permanent Marker', cursive;
  font-size: 60px;

}

/* Menu */

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

/*-------------------------
    The menu
--------------------------*/

nav{
    display:inline-block;
    margin:60px auto 15px;
    background-color: #595959;
    box-shadow:0 1px 1px #ccc;
    border-radius:10px;
    width: 90%;
}

nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;
    border-radius:10px;
    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}

nav a:first-child{
    border-radius:2px 0 0 2px;
}

nav a:last-child{
    border-radius:0 2px 2px 0;
}

nav.home .home,
nav.cv .cv,
nav.realisations .realisations,
nav.about .about,
nav.contact .contact{
    background-color:#d64747;
    border-radius:10px;
}

nav.home .home,
nav.cv .cv,
nav.realisations .realisations,
nav.about .about,
nav.contact .contact:hover {
  -webkit-animation: pulse 2s;
  animation: pulse 2s;
}

p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
}

p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
}
.resource {
  margin: 20px 0;
}

</style>
