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
          <el-button type="primary" @click.native="$store.dispatch('ShowDialog')">添加用户</el-button>
        </el-col>
      </el-row>
      <user-show :userlist="usersList" @UpData="UpData" @DeleteUser="DeleteUser"></user-show>
      <el-pagination
        @size-change="SizeChange"
        @current-change="CurrentChange"
        :current-page="userInfo.pagenum"
        :page-sizes="ShowSize"
        :page-size="userInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totleUser">
      </el-pagination>
      <dia-log
        :dialog-visible="$store.state.Showdialog"
        :title="titleName"
        @close="close">
        <dia-log-item
        :user-data="Userdata"
        :rules="rules"
        ref="DiaLogItem">
        </dia-log-item>
      </dia-log>
    </el-card>
  </div>
</template>

<script>
import UserShow from './children/usershow/UserShow'
import { Getusers,DeleteUser} from '@/network/Getusers'
import {CheckEmail,CheckPhone,CheckPassword,CheckUsername} from '@/utils/utils'
import DiaLog from 'components/content/dialog/DiaLog'
import DiaLogItem from './children/dialogitem/DiaLogItem'
export default {
  name:'users',
  components:{
    UserShow,
    DiaLog,
    DiaLogItem
  },
  created(){
    this.getUsers(this.userInfo.queryInfo,this.userInfo.pagenum,this.userInfo.pagesize)
  },
  updated(){
    //当数据发生更新的时候就再查询一次
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
          username:null,
          password:null,
          email:null,
          phone:null,
          id:0
        },
        title:['添加用户','修改用户'],
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
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              {validator:CheckEmail,trigger: 'blur'}
          ],
          phone:[
              { required: true, message: '请输入手机号', trigger: 'blur' },
              {validator:CheckPhone,trigger:'blur'}
          ],
        }
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
      },
      titleName(){
        return this.Userdata.username? this.title[1] :this.title[0]
      },
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
    //关闭dialog
    close(){
      //dialog为false
      this.$refs.DiaLogItem.Disdialog();
      //监听关闭事件
      this.$refs.DiaLogItem.resetFields();
    },
    //修改用户信息
    UpData({username,email,mobile,id}){
      this.Userdata.username=username;
      this.Userdata.email=email;
      this.Userdata.phone=mobile;
      this.Userdata.id=id;
    },
    //删除User
    DeleteUser({id}){
      this.$confirm('此操作将永远删除用户,是否确定?','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(res=>{
        DeleteUser(id).then(res=>{
          this.$toast.show(res.data.meta.msg,500);
        })
      }).catch(err=>{
        this.$toast.show('取消删除用户',500);
        return err
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