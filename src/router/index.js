import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cv from '@/components/Cv'
import Strava from '@/components/strava'
import About from '@/components/About'

Vue.use(Router)
/* eslint-disable */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Cv',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/strava',
      name: 'Strava',
      component: Strava
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
