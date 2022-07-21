import Vue from 'vue'
import App from './App.vue'
import router from 'route/index'
import toast from './components/content/toast/toast'
import store from 'store/index'
import Element from 'element-ui'
//挂载ElementUI
Vue.use(Element)
//使用toast
Vue.use(toast)
//全局监听
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
