import Vue from "vue";
import Router from 'vue-router';
//使用Vue-router
Vue.use(Router);
//创建path
const routes=[
  {
    path:'',
    redirect:'/ZyLogin',
  },
  {
    path:'/ZyLogin',
    component:()=>import('components/content/login/ZyLogin'),
    meta:{
      title:'login'
    }
  },
  {
    path:'/home',
    component:()=>import('views/home/Home'),
    meta:{
      title:'home'
    }
  }
]
const router=new Router({
      routes,
      mode:'history'
})
//判断是否有token
router.beforeEach((to, from, next) => {
  const token=window.sessionStorage.getItem('token');
  if(to.path==='/ZyLogin'&& !token){
    return next()
  }
  next();
})
export default router

