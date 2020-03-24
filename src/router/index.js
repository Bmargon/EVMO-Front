import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter, ElementUI)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
