<template>
  <div>
      <el-form ref="adduser" :model="userData" label-width="70px" :rules="rules">
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
          <el-button  @click.native="$store.dispatch('ShowDialog')">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>