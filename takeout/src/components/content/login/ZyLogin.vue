<template>
  <div id="login">
    <div class="contain">
      <div class="avatar_box">
        <img src="~assets/img/onepiece.png" alt="avatar">
      </div>
      <div class="input_contain">
        <el-form label-width="0px" :model="Userdata" :rules="rules" ref="loginform">
          <div class="input_con">
            <el-form-item prop="username">
              <el-input prefix-icon="el-icon-user" 
                        v-model="Userdata.username" 
                        placeholder="请输入账号">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="el-icon-lock" 
                        show-password
                        v-model="Userdata.password" 
                        placeholder="请输入密码">
              </el-input>
            </el-form-item>
          </div>
          <el-form-item class="but">
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button type="info" @click="resetform">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '@/network/login'
import {CheckUsername,CheckPassword} from '@/utils/utils'
export default {
  name:'ZyLogin',
  data() {
    return {
      //用户的数据
      Userdata:{
        username:'admin',
        password:'123456'
      },
      //表单验证规则
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger: 'blur'},
          {validator:CheckUsername,trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'blur'},
          {validator:CheckPassword,trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetform(){
      //重置密码
      this.$refs.loginform.resetFields();
    },
    submit(){
      this.$refs.loginform.validate((valid)=>{
        if(!valid){
          return false
        }
        else{
          login(this.Userdata.username,this.Userdata.password).then(res=>{
            const data=res.data;
            if(data.meta.status===200){
              this.$toast.show(data.meta.msg,300);
              sessionStorage.setItem('token',data.data.token);
              setTimeout(()=>{
                this.$router.push('/home')
              },200)
            }
            else{
              this.$toast.show(data.meta.msg,800);
            }
          })
        }
      });
    }
  },
}
</script>

<style scoped>
 #login{
  height: 100vw;
  width: 100vw;
  background-color: #2b4b6b;
}
.contain{
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  position:absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
}
.avatar_box>img{
  position: absolute;
  margin-top: 20px;
  right: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 80px;
  height: 80px;
}
.input_contain{
  margin-top: 105px;
}
.but{
  display: flex;
  justify-content: center;
}
.input_con{
  padding-left:70px;
  padding-right:40px;
  box-sizing: border-box;
}
</style>