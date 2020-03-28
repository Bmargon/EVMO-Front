/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
// // //
// Components
// // //
import Dashboard from '@/views/Dashboard'
import SignUp from '@/views/sign/SignUp'
import Middleware from '@/views/Middleware'
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
  }, children: [] },
  // // //
  { path: '**', component: Dashboard }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
