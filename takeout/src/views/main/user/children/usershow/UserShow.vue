<template>
  <el-table :data="userlist" border stripe>
  <!-- 设置索引列 -->
  <el-table-column type="index"></el-table-column>
  <!-- Prop不需要加入 : -->
    <el-table-column label="姓名" prop="username"></el-table-column>
    <el-table-column label="邮箱" prop="email" ></el-table-column>
    <el-table-column label="电话" prop="mobile" ></el-table-column>
    <el-table-column label="角色" prop="role_name"></el-table-column>
    <el-table-column label="状态" prop="mg_state" >
      <template slot-scope="scope">
        <el-switch
          v-model="BooStatu"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name:'UserShow',
  data () {
    return {
      BooStatu:true
    }
  },
  props:{
    userlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    
  }
}
</script>

<style scoped>
.el-table{
  margin-top: 17px;
}
</style>