
<template>
<div id="parent" class="parent">
  <div id="enfant" class="enfant">
  <div id="cv" class="cv">
    <div class="transbox">
    <h3>Summary of my skills</h3>
    <ul>
      <li>Developed various image processing skills</li>
      <li>Able to learn easily new programming language</li>
      <li>Sociable, good adaptation capacity, motivated and motivating,</li>
      <li>Regular, organized and punctual</li>
    </ul>
    </div>
    <div class="transbox">
    <h3>Education</h3>
    <ul>
      <li><b>Master’s degree</b> in Computer Science, specializing in computer imaging in 2019 ,University of Montpellier, France</li>
      <li><b>Bachelor degree</b> in Computer Science in 2017, University of Strasbourg, France</li>
      <li><b>Two-year University degree</b> in Computer Science in 2016, University of Strasbourg, France</li>
      <li><b>Two-year University degree</b> in Sciences, specializing in acoustic physics in 2015, University of Le Mans, France</li>
      <li><b>'A'</b> Levels in Science with high grades in 2013, Secondary School Michel de Montaigne of Mulhouse, France</li>
    </ul>
    </div>
    <div class="transbox">
    <h3>Professional Experience</h3>
    <ul>
      <li><b>June-July 2017. Saint-Louis, France</b></li>
      <li>
        <ul>
          <li>Trainee at the Franco-German Research Institute of Saint-Louis</li>
          <li>Modules and interfaces programming for active imaging binoculars</li>
          <li>Improved C++ and matlab programming language skills</li>
          <li>Used Qt Creator, Matlab and Arduino Integrated Development Environments.</li>
        </ul>
      </li>
      <li><b>June-July 2016. Strasbourg, France</b></li>
      <li>
        <ul>
          <li>Trainee at the ICUBE Research Laboratory of Illkirch-Graffenstaden</li>
          <li>creation of a web dashboard in real time relation with the IoT-LAB platform</li>
          <li>Improved python, C++ and web programming language skills</li>
          <li>Used web Frameworks and Arduino Integrated Development Environments</li>
        </ul>
      </li>
    </ul>
    </div>
    <div class="transbox">
    <h3>Computer knowledge</h3>
    <ul>
      <li>Computer languages : C, C ++, Java, Shell script, Python, SQL, MIPS assembler, Ocaml, Prolog, HTML, CSS, javascript, vueJS</li>
      <li>Common skills : Word-type text processing, Excel spreadsheets, Powerpoint, Open-Office, Google Drive Suite</li>
      <li>Integrated Development Environments : Eclipse, Qt Creator, Arduino IDE, Code Blocks, Unreal Engine, Unity</li>
      <li>IT environments : Unix, Windows, Android, iOS, ChromeOS</li>
    </ul>
    </div>
    <div class="transbox">
    <h3>Languages</h3>
    <ul>
      <li>French : native speaker</li>
      <li>English : good working knowledge</li>
      <li>German : working knowledge</li>
    </ul>
    </div>
    <div class="transbox">
    <h3>Hobbies</h3>
    <ul>
      <li>Sports: Basketball, Handball, Bicycle, Running, Climbing, Badminton, Tennis</li>
      <li>Play the piano by ear</li>
      <li>Video editing on YouTube</li>
      <li>Website creation</li>
      <li>Bike messenger</li>
    </ul>
    </div>
    <br><br><br><br><br><br><br>
  </div>
</div>
</div>
</template>

<script>
/* eslint-disable */

export default {

  data () {
    return {

    }
  },
  created () {
  },
}
</script>

<style scoped>


.cv {
display: table;
margin-left: 10%;
margin-right: 5%;
margin-top: 5%;
position: absolute;
height: 100%;
width: 80%;
}

div.transbox {
  margin: -5px;
  padding-left: 10px;
  padding-top: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  filter: alpha(opacity=60); /* For IE8 and earlier */
}


h3 {
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
}

li {
  padding-left : 15px;
}

ul {
  padding-bottom: 10px;
}
</style>
