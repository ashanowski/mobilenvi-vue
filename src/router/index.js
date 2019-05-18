import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/Landing'
import Login from '../components/Login'

import Account from '../components/Account'
import Home from '../components/AccountComps/Home'
import Data from '../components/AccountComps/Data'
import Terminals from '../components/AccountComps/Terminals'
import Contact from '../components/AccountComps/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'data', name: 'Data', component: Data },
        { path: 'terminals', name: 'Terminals', component: Terminals },
        { path: 'contact', name: 'Contact', component: Contact }
      ]}
  ]
})
