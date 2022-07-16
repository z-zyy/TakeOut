<template>
  <el-dialog
        :title="title"
        :visible.sync="$store.state.Showdialog"
        @close.native="ToggleData"
        ref="AddData"
        width="50%">
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
    },
  },
  methods:{
    ToggleData(){
      //关闭dialog弹窗
      console.log(213);
      this.$store.dispatch('ShowDialog');
    },
  }
}
</script>

<style scoped>

</style>