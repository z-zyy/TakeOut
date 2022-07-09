export default {
  created() {
    console.log(this.rules);
  },
  data() {
    return {
      
    }
  },
  rules:{
    userName:[
      {validator:CheckUsername,trigger: 'blur'}
    ],
    password:[
      {validator:CheckPassword,trigger: 'blur'}
    ],
  }
}