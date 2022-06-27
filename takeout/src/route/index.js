import Vue from "vue";
import Router from 'vue-router';
//使用Vue-router
Vue.use(Router);
//创建path
const routes=[
  {
    path:'',
    redirect:'/ZyLogin'
  },
  {
    path:'/ZyLogin',
    component:()=>import('components/content/login/ZyLogin')
  }
]
const router=new Router({
      routes,
      mode:'history'
})
export default router

