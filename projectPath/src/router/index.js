import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index'
import Weather from '../components/weather/weather'
import Kuaidi from '../components/kuaidi/kuaidi'
import Pic from '../components/piclist/picture'
import Huoche from '../components/huoche/huoche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path:'/weather',
      name:'weather',
      component:Weather
    },
    {
      path:'/pic',
      name:'picture',
      component:Pic
    },
    {
      path:'/kuaidi',
      name:'kuaidi',
      component:Kuaidi
    },
    {
      path:'/huoche',
      name:'huoche',
      component:Huoche
    }
  ]
})
