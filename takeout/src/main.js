import Vue from 'vue'
import App from './App.vue'
import router from 'route/index.js'
import Element from 'element-ui'
import toast from './components/content/toast/toast'
//挂载ElementUI
Vue.use(Element)
Vue.use(toast)
//全局监听
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
