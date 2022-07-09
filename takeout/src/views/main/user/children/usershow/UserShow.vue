<template>
  <el-table :data="userlist" border stripe>
  <!-- 设置索引列 -->
  <el-table-column type="index"></el-table-column>
  <!-- Prop不需要加入 : -->
    <el-table-column label="姓名" prop="username"></el-table-column>
    <el-table-column label="邮箱" prop="email"></el-table-column>
    <el-table-column label="电话" prop="mobile"></el-table-column>
    <el-table-column label="角色" prop="role_name"></el-table-column>
    <el-table-column label="状态" >
    <!-- slot-scoped的作用是分别在自己的作用域中找到自己的值 -->
      <template slot-scope="scope">
        <el-switch v-model="scope.row.mg_state" @change="ChangeStatus(scope.row)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-tooltip effect="dark" content="修改" placement="top" :enterable='false'>
          <el-button type="primary" icon="el-icon-edit"></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="删除" placement="top" :enterable='false'>
          <el-button type="danger" icon="el-icon-delete"></el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="分配角色" placement="top" :enterable='false'>
          <el-button type="warning" icon="el-icon-setting"></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ChangeStatus } from "@/network/Getusers" 
export default {
  name:'UserShow',
  data () {
    return {
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
  methods:{
    ChangeStatus(status){
      //发送网络请求修改状态
      ChangeStatus(status.id,status.mg_state).then(res=>{
        const data=res.data;
        this.$toast.show(data.meta.msg,500);
        if(data.meta.status!==200){
          this.$toast.show(data.meta.msg,500);
        }
      })
    }
  }
}
</script>

<style scoped>
.el-table{
  margin-top: 17px;
}
</style>