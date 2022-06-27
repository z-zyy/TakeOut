import Vue from 'vue'
import App from './App.vue'
import router from 'route/index.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//挂载ElementUI
Vue.use(Element)
//全局监听
Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
