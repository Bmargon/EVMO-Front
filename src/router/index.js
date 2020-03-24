import Vue from 'vue'
import VueRouter from 'vue-router'
// // //
// Components
// // //
import Dashboard from '@/views/Dashboard'
import SignIn from '@/views/sign/SignIn'
import SignUp from '@/views/sign/SignUp'
// // //
Vue.use(VueRouter)

// // //
// Rutas
// // //
const routes = [
  { path: '/dashboard', name: 'home', component: Dashboard },
  { path: '/signin', name: 'signin', component: SignIn },
  { path: '/signup', name: 'signup', component: SignUp },
  // // //
  { path: '**', component: Dashboard }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
