<template>
  <div>
      <el-form  :model="userData" label-width="70px" :rules="rules" ref="formData">
          <el-form-item label="用户名" prop="username" >
            <el-input v-model="userData.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="userData.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="userData.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="userData.phone"></el-input>
          </el-form-item>
      </el-form>  
        <span slot="footer" class="dialog-footer">
          <el-button  @click.native="Redialog">取 消</el-button>
          <el-button type="primary" @click.native="submitForm">确 定</el-button>
        </span>
  </div>
</template>

<script>
import { Addusers } from '@/network/Getusers'
export default {
  name:'DiaLogItem',
  props:{
    userData:{
      type:Object,
      default(){
        return {}
      }
    },
    rules:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    Redialog(){
      //清空输入框
      this.resetFields();
      //使dialog为false
      this.Disdialog();
    },
    submitForm() {
      //添加对象
      this.$refs.formData.validate((valid) => {
        const {username,password,email,phone}=this.userData;
        if (valid) {
            Addusers(username,password,email,phone).then(res=>{
              this.resetFields();
              this.Disdialog();
              this.$toast.show(res.data.meta.msg,500);
            })
        } 
        else {
          return false; 
        }
      });
    },
    //重置菜单
    resetFields(){
      this.$refs.formData.resetFields();
    },
    //清空dialog
    Disdialog(){
      this.$store.dispatch('DisDialog');
    }
  }
}
</script>

<style scoped>

</style>