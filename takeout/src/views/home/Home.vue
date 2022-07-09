<template>
  <el-container class="home_content">
    <el-header>
      <div class="logo">
        <img src="~assets/img/Home.png" alt="Home" class="home_img">
        <p class="home_netx">后 台 管 理 系 统</p> 
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isToggle">
        <!--展开按钮  -->
        <div class="toggle-button" @click="toggleMenu">| | |</div>
        <!-- 菜单 -->
        <my-menu :list="list" :toggle="toggle"></my-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyMenu from '../menu/MyMenu'
import {getMenu} from 'network/getMenu'
export default {
  name:'Home',
  components:{
   MyMenu
  },
  created(){
    //获取菜单栏数据
    this.getMenu();
  },
  data(){
    return{
      list:[],
      toggle:false
    }
  },
  computed:{
    isToggle(){
      return this.toggle ?64+'px':200+'px'
    }
  },
  methods:{
    //获得菜单的值
    getMenu(){
      getMenu().then(res=>{
        const data=res.data.data;
        //传递list
        this.list=data;
      })
    },
    //退出账号
    logout(){
      sessionStorage.clear();
      this.$router.push('/login');
    },
   //菜单折叠切换
    toggleMenu(){
      //切换
      this.toggle=!this.toggle;
    }
  }
}
</script>

<style scoped>
.el-header{
  background-color: #173d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}
.logo{
  display: flex;
  align-items: center;
}
.home_netx{
  margin-left:15px;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
}
.home_img{
  width: 60px;
  height: auto;
}
.el-aside{
  height: 100vw;
  width: 100vw;
  background-color: #333747;
}
.el-main{
  width: 100vw;
  height: 100vw;
  background-color: #EAEDF1; 
}
.toggle-button{
  height: 30px;
  background-color: #4a5064;
  line-height: 30px;
  text-align: center;
  /* 元素的字母间距*/
  letter-spacing: 0.1em;
  /*鼠标的形状*/
  cursor: pointer;
  color: #fff;
}
</style>