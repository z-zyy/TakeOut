<template>
  <el-container>
    <el-header>
      <span>Header</span> 
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name:'Home',
  methods:{
    logout(){
      sessionStorage.clear();
      this.$router.back(-1);
    }
  }
}
</script>

<style scoped>
.el-header{
  background-color: #173d41;
}
.el-aside{
  background-color: #333747;
}
.el-main{
  background-color: #EAEDF1;
}
</style>