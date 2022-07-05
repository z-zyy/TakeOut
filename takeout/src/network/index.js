import axios from "axios";


export function request(config){
  const network=axios.create({
    baseURL:'http://127.0.0.1:9999/api/private/v1/',
    timeout:5000
  })
  //axios的请求拦截器  一般请求的内容时候需要携带token
  if(sessionStorage.getItem('token')!==null){
    network.interceptors.request.use((config)=>{
      //为请求头添加token;
      config.headers.Authorization=sessionStorage.getItem('token');
      return config
      },(err)=>{
        console.log(err);
    })
  }
  return network(config);
}


