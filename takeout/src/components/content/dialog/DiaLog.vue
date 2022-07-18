<template>
  <el-dialog
        :title="title"
        :visible.sync="$store.state.Showdialog"
        width="50%"
        @close="close">
        <slot></slot>
  </el-dialog>
</template>

<script>

export default {
  name:'DiaLog',
  props:{
    title:{
      type:String,
      default:''
    }
  },
  methods:{
    close(){
      //传递一个关闭事件
      this.$emit('close');
    }
  }
}
</script>

<style scoped>

</style>