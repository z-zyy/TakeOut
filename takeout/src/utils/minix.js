import {CheckEmail,CheckPhone,CheckPassword,CheckUsername} from '@/utils/utils'
export default {
  data() {
    return {
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger: 'blur'},
          {validator:CheckUsername,trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger: 'blur'},
          {validator:CheckPassword,trigger: 'blur'}
        ],
        email:[
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            {validator:CheckEmail,trigger: 'blur'}
        ],
        phone:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {validator:CheckPhone,trigger:'blur'}
        ],
      }
    }
  },
}