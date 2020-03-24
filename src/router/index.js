import Vue from 'vue'
import VueRouter from 'vue-router'
// // //
// Components
// // //
import Dashboard from '@/views/Dashboard'
// // //
Vue.use(VueRouter)

// // //
// Rutas
// // //
const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '**', component: Dashboard }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
