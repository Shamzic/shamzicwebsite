<template>
  <body>
    <header>
      <div class="animated jackInTheBox 4s">
        <h1> {{ title }}</h1>
      </div>
      <div id="main">
        <div class="topnav" id="myTopnav">
        <nav v-bind:class="active" v-on:click.prevent>
          <router-link class="home" v-on:click.native="makeActive('home')" to="/">HOME</router-link>
          <router-link class="cv" v-on:click.native="makeActive('cv')" to="/Cv">CV</router-link>
          <router-link class="realisations" v-on:click.native="makeActive('realisations')" to="/Realisations">Realisations</router-link>
          <router-link class="about" v-on:click.native="makeActive('about')" to="/About">About</router-link>
        </nav>
        <a v-on:click="myFunction" href="javascript:void(0);" class="icon">
          <i class="fa fa-bars"></i>
        </a>
        </div>
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
    },
    myFunction: function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  }
}
</script>

<style scoped>

*{
    margin:0;
    padding:0;
}

h1 {
  color: #222;
  margin-top: 2%;
  margin: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 60px;
}

/* Menu */

body{
    font-family: 'Raleway', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
    padding-top: 3%;
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
    display: inline-block;
    background-color: white;
    border-radius:10px;
    width: 80%;
}

nav a{
    padding: 2% 5%;
    margin: 0% 0.5%;
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
    background-color: #b8b8b8;
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

/*
 INSANE
*/

.fa-bars {
  color: black;
  font-size: 155%;
}

nav {
  background-color: rgb(255, 255, 255);
  height: 10%;
  margin-bottom: 3%;
  margin-top: 3%;
  padding-bottom: 1%;
  padding-top: 1%;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a {
    display: flex;
    justify-content: center;
    margin-bottom: 1%;
  }
  .topnav a.icon {
    display: flex;
    float: right;
    justify-content: center;
  }
}


@media screen and (max-width: 600px) {
   header {margin: 5%;}
  .topnav.responsive {position: relative; }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 0%;
    padding-left: 0%;
  }
  .topnav.responsive a {
    display: block;
    text-align: center;
    margin-bottom: 2%;
  }
}
</style>
