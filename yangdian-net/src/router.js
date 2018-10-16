import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import shopCar from './pages/shopCar/shopCar.vue'
import User from './pages/User/User.vue'
Vue.use(Router)
export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes:[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/Classify',
    name:'Classify',
    component:Classify
  },
  {
    path:'/shopCar',
    name:'shopCar',
    component:shopCar
  },
  {
    path:'/User',
    name:'User',
    component:User
  }
  ]
})
