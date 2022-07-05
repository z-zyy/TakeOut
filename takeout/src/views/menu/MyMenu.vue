<template>
    <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409Bff"
          :unique-opened="true"
          :collapse="toggle"
          :collapse-transition="false"
          :router="true"
          :default-active="path">
          <!-- 第一个菜单 -->
          <el-submenu :index="item.id+''" v-for="(item,index) in list" :key="item.id">
            <template slot="title">
              <i :class="fontImg[index]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index='child.path' 
             v-for="(child,index) in item.children" 
             :key="child.id"
             @click="choicePath(child.path)">
              <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{child.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 第二个菜单 -->
    </el-menu>
</template>

<script>
export default {
  name:'MyMenu',
  data() {
    return {
      fontImg:['el-icon-s-custom','el-icon-pie-chart',
      'el-icon-bank-card','el-icon-receiving','el-icon-data-line'],
      path:'welcome'      
    }
  },
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    },
    toggle:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    //选择路径
    choicePath(path){
      this.path=path;
    }
  }
}
</script>

<style scoped>
.el-menu{
  border-right: 0;
}
</style>