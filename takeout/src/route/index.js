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
    redirect:'/home/welcome',
    component:()=>import('views/home/Home'),
    children:[
      {
        path:'welcome',
        component:()=>import('views/main/WelCome')

      },
      {
        path:'users',
        component:()=>import('views/main/user/Users')
      },
      {
        path:"rights",
        component:()=>import('views/main/rights/Rights')
      },
      {
        path:"roles",
        component:()=>import('views/main/roles/Roles')
      },
      {
        path:"params",
        component:()=>import('views/main/params/Params')
      },
      {
        path:"goods",
        component:()=>import('views/main/goods/Goods')
      },
      {
        path:"categories",
        component:()=>import('views/main/categories/Categories')
      },
      {
        path:'orders',
        component:()=>import('views/main/orders/Orders')
      },
      {
        path:'reports',
        component:()=>import('views/main/reports/Reports')
      }
    ],
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

