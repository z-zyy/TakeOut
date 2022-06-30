<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
 @import 'assets/css/base.css';
 @import 'assets/css/normalize.css';
 @import 'assets/css/element.css'
</style>
