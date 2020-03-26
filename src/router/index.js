import Vue from 'vue'
import VueRouter from 'vue-router'
// // //
// Components
// // //
import Dashboard from '@/views/Dashboard'
import SignUp from '@/views/sign/SignUp'
import UserAccount from '@/views/UserAccount'
// // //
Vue.use(VueRouter)

// // //
// Rutas
// // //
const routes = [
  { path: '/dashboard', name: 'home', component: Dashboard },
  { path: '/signup', name: 'signup', component: SignUp },
  { path: '/', name: 'UserAccount', component: UserAccount },
  // // //
  { path: '**', component: Dashboard }

]

// routes.beforeEach((to, from, next) => {
//   //Aqui checas, si tiene una sesion o un token y el usuario quiere ir a la ruta login, no lo permites //y lo mandas a la raiz
//   // if (to.name === 'UserAccount' && router.app.$session.exists()) {
//   //   router.push('/')
//   // }
//   // next()
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
