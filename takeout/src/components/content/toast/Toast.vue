<template>
  <div >
    <div v-show="isShow" class="toast">{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'LoginToast',
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration=200){ 
      this.isShow=true;
      this.message=message;
      setTimeout(()=>{
      this.message='';
      this.isShow=false;
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  z-index: 9;
  color: white;
  padding: 8px 10px;
  background: rgba(0,0,0,.8);
  top:50%;
  border-radius: 5%;
  text-align: center;
  line-height:30px;
  transform: translate(-50%,-50%);
  left:50%;
}
</style>