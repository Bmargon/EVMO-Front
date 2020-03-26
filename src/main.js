import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/main.scss'
import VueSweetalert2 from 'vue-sweetalert2'
// // //
Vue.use(VueSweetalert2)
Vue.use(ElementUI)

Vue.config.productionTip = false
// // //
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
