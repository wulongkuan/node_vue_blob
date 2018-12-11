import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Login'
import MainLauOut from '@/layout/main-layout';
import Person from '@/components/Person';
import List from '@/components/List';
import Detail from '@/components/Details';
import PersonInfo from '@/components/personInfo/Person'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'MainLauOut',
      component: MainLauOut,
      children:[
        {
          path:'/main/person',
          name:'Person',
          component: Person,
        },
        {
          path:'/main/list',
          name:'List',
          component: List,
        },
        {
          path:'/main/details',
          name:'Detail',
          component: Detail,
        },
        {
          path:'/main/personinfo',
          name:'PersonInfo',
          component: PersonInfo,
        }
      ]
    }
  ]
})
