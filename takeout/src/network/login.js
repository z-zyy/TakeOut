import { request } from "./index";

export function login(username,password){
  return request({
    url:'/login',
    method:'POST',
    method: 'post',
    //post请求用data而且要用json的方式
    data:{
      'username':username,
      'password':password
    }

  })
}