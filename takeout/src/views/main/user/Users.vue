<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/home/welcome'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="25">
        <el-col :span="9">
          <el-input placeholder="请输入内容" >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <user-show :userlist="usersList"></user-show>
    </el-card>

  </div>
</template>

<script>
import UserShow from './children/usershow/UserShow'
import { Getusers } from '@/network/Getusers'
export default {
  name:'users',
  components:{
    UserShow
  },
  created(){
    this.getUsers(this.userInfo.queryInfo,this.userInfo.pagenum)
  },
  data() {
    return {
      userInfo:{
          pagenum:1,
          queryInfo:'',
      },
      totleUser:0,
      usersList:[]
      }
    },
  methods:{
    //请求函数封装
    getUsers(queryInfo,pagenum){
      //定义每次获取4条数据
      const pagesize=4;
      Getusers(queryInfo,pagenum,pagesize).then(res=>{
        const data=res.data.data;
        //获得user的参数
        this.usersList=data.users;
        //获得全部users
        this.totleUser=data.total;
      })
    }
  }
}
</script>

<style scoped>
.el-breadcrumb{
  font-size: 15px;
  margin-bottom:17px;
}
</style>