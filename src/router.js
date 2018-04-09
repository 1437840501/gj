import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import One from './views/One.vue'
import Two from './views/Two.vue'
import Page from './views/Page.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlie',
      name: 'about',
      component: About
    },
    {
      path:'/One',
      name:'one',
      component:One
    },
    {
      path:'/two',
      name:'two',
      component:Two
    },
    {
      path:'/page',
      name:'page',
      component:Page
    }
  ]
})
