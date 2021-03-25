
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Entity from './Entity.vue'
import Tab from './Tab.vue'

import '../src/menu.scss';

Vue.use(Router)

const router = new Router ({
  routes: [
    {
      path: '/navFst/:idd',
      name: 'navFst',
      component: Tab,
      props: true,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Entity,
      props: true,
    },
   
  ]
})

new Vue({
  el: '#app', 
  render: h => h(App),
  router
})
