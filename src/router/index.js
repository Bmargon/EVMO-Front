/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
// // //
// Components
// // //
import Dashboard from '@/views/Dashboard'
import SignUp from '@/views/sign/SignUp'
import Middleware from '@/views/Middleware'
import Events from '@/views/auth/Events'
import Tickets from '@/views/auth/Tickets'
import Profile from '@/views/auth/Profile'
// // //
Vue.use(VueRouter)

// // //
// Rutas
// // //
const routes = [
  { path: '/dashboard', name: 'home', component: Dashboard },
  { path: '/signup', name: 'signup', component: SignUp },
  { path: '/', name: 'middleware', component: Middleware, meta: { Auth: false }, beforeEnter: (to, from, next) => {
    if (!localStorage.getItem('token')) {
      next({ name: 'home' })
    } else {
      next()
    }
  }, children: [
    { path: '/events', name: 'events', component: Events },
    { path: '/tickets', name: 'tickets', component: Tickets },
    { path: '/profile', name: 'profile', component: Profile },
  ] },
  // // //
  { path: '**', component: Dashboard }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
