import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VBindFather from '@/components/v-bind/father'
import VOnFather from '@/components/v-on/father'
import OnEmit from '@/components/on-emit/on-emit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/v-bind',
      component: VBindFather
    },
    {
      path: '/v-on',
      component: VOnFather
    },
    {
      path: '/on-emit',
      component: OnEmit
    }
  ]
})
