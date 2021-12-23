import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import content from '@/components/content'
import lbt from '@/components/lbt'
import logins from '@/components/login'
import lamessage from '@/components/lamessage'
import aboutus from '@/components/aboutus.vue'
import one from '@/components/abouone'
import tow from '@/components/abouttow'
import tree from '@/components/abouttree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path:'/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/lbt',
      name: 'lbt',
      component: lbt
    },
    {
      path:'/logins',
      name:'logins',
      component:logins
    },{
      path:'/lamessage',
      name:'lamessage',
      component:lamessage
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component:aboutus,
      children:[
        {
          path:'one',
          component:one
        },{
          path:'tow',
          component:tow
        },{
          path:'tree',
          component:tree
        }
      ]
    }
  ]
})
