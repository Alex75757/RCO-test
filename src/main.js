
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Entity from './Entitys.vue'
import Tab from './Tab.vue'
import Source from './Source.vue'
import Facts from './Facts.vue'

import '../src/menu.css';

Vue.use(Router)

const router = new Router ({
  routes: [
    {
      path: '/tab/:id',
      name: 'tab',
      component: Tab,
      props: true,
    },
    {
      path: '/entity/',
      name:'entity',
      component: Entity,
      props: true,
    },
    {
      path: '/source/:id',
      name:'source',
      component: Source,
      props: true,
    },
    {
      path: '/facts/',
      name:'facts',
      component: Facts,
      props: true,
    }
   
  ],
  
  

  
})

// export var selected_source = new Vue()

new Vue({
  el: '#app',
  data:{
    tab_selected: -1,
    source_selected: 0,
    time_selected: 0,
    attribute_selected: -1,
  }, 
  
  render: h => h(App),
  router
  
  
})