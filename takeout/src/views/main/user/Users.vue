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
          <el-input placeholder="请输入姓名查询" v-model="userInfo.queryInfo" clearable @clear="AllUser">
            <el-button slot="append" icon="el-icon-search" @click.native="SearchUser"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click.native="dialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>
      <user-show :userlist="usersList"></user-show>
      <el-pagination
        @size-change="SizeChange"
        @current-change="CurrentChange"
        :current-page="userInfo.pagenum"
        :page-sizes="ShowSize"
        :page-size="userInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totleUser">
      </el-pagination>
      <el-dialog
        title="添加成员"
        :visible.sync="dialogVisible"
        @close="ToggleData"
        width="50%">
        <el-form ref="adduser" :model="Userdata" label-width="70px" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="Userdata.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="Userdata.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="Userdata.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="Userdata.phone"></el-input>
          </el-form-item>
        </el-form>  
        <span slot="footer" class="dialog-footer">
          <el-button  @click.native="dialogVisible=false">取 消</el-button>
          <el-button type="primary" @click="AddData">确 定</el-button>
        </span>
    </el-dialog>
    </el-card>
  </div>
</template>

<script>
import UserShow from './children/usershow/UserShow'
import { Getusers,Addusers } from '@/network/Getusers'
import {CheckEmail,CheckPhone,CheckPassword,CheckUsername} from '@/utils/utils'
export default {
  name:'users',
  components:{
    UserShow,
  },
  created(){
    this.getUsers(this.userInfo.queryInfo,this.userInfo.pagenum,this.userInfo.pagesize)
  },
  data() {
    return {
      userInfo:{
          pagenum:1,
          pagesize:4,
          queryInfo:'',
      },
      totleUser:0,
      usersList:[],
      Userdata:{
        username:'',
        password:'',
        email:null,
        phone:null,
      },
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger: 'blur'},
          {validator:CheckUsername,trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'blur'},
          {validator:CheckPassword,trigger: 'blur'}
        ],
        email:[
            { required: false, message: '请输入邮箱', trigger: 'blur' },
            {validator:CheckEmail,trigger: 'blur'}
        ],
        phone:[
            { required: false, message: '请输入手机号', trigger: 'blur' },
            {validator:CheckPhone,trigger:'blur'}
        ],
      },
      dialogVisible:false
      }
    },
    computed:{
      ShowSize(){
        //判断需要多少条数据
        const arr=[];
        let index=1;
        if(this.totleUser<=100){
          for(index;index<=this.totleUser;index++){
            arr.push(index)
          }
          return arr
        }
        else{
          for(index;(index*10)<=this.totleUser;index++){
            index+=10;
            arr.push(index);
          }
          return arr
        }
      }
    },
  methods:{
    //请求函数封装
    getUsers(queryInfo,pagenum,pagesize){
      Getusers(queryInfo,pagenum,pagesize).then(res=>{
        const data=res.data.data;
        //获得user的参数
        this.usersList=data.users;
        //获得全部users
        this.totleUser=data.total;
      })
    },
    //监听新的页数
    SizeChange(newSize){
      //改变条数
      this.userInfo.pagesize=newSize;
      //发送请求
      this.getUsers(this.userInfo.queryInfo,this.userInfo.pagenum,newSize)
    },
    //页码值改变的属性
    CurrentChange(newPage){
      //改变页数
      this.userInfo.pagenum=newPage;
      //发送请求
      this.getUsers(this.userInfo.queryInfo,newPage,this.userInfo.pagesize);
    },
    //查询user
    SearchUser(){
      this.getUsers(this.userInfo.queryInfo,this.userInfo.pagenum,this.userInfo.pagesize);
    },
    //获得全部user
    AllUser(){
      this.getUsers('',this.userInfo.pagenum,this.userInfo.pagesize);
    },
    ToggleData(){
      //关闭对话框时重置参数
      this.$refs.adduser.resetFields();
      //重置用户名
      this.Userdata.username='';
    },
    AddData(){
      //添加用户
      this.$refs.adduser.validate(valid=>{
        const users=this.Userdata;
        if(valid){
          Addusers(users.username,users.password,users.email,users.phone).then(res=>{
            this.$toast(res.data.data.meta.msg,200);
            this.$refs.adduser.dialogVisible=false;
          })    
        }
        else return valid
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
.el-pagination{
  margin-top: 15px;
}
</style>