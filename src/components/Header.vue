<template>
  <body>
    <header>
      <h1> {{ title }}</h1>

      <div id="main">
        <nav v-bind:class="active" v-on:click.prevent>
          <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
          <a href="#" class="cv" v-on:click="makeActive('cv')">CV</a>
          <a href="#" class="projects" v-on:click="makeActive('projects')">Projects</a>
          <a href="#" class="blog" v-on:click="makeActive('blog')">blog</a>
          <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
        </nav>

        <p>You chose <b>{{ active }}</b></p>
      </div>

    </header>
  </body>

</template>

<script>
/* eslint-disable */
import { bus } from '../main'

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
  padding-left: 50px;
  font-family: 'Permanent Marker', cursive;
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
    margin:60px auto 45px;
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
nav.projects .projects,
nav.blog .blog,
nav.contact .contact{
    background-color:#d64747;
    border-radius:10px;
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
