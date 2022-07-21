import { request } from "./index";

//获取用户
export function Getusers(query,pagenum,pagesize){
  return request({
    url:'/users',
    params:{
      query,
      pagenum,
      pagesize
    }
  })
}
//查询用户
export function SerachUser(uid){
  return request({
    url:`users/${uid}`,
  })
}

//修改用户状态
export function ChangeStatus(uid,type){
  return request({
    url:`users/${uid}/state/${type}`,
    //注意方法
    method:'put'
  })
}

//添加用户
export function Addusers(username,password,email,mobile){
  return request({
    url:'users',
    method:'post',
    data:{
      'username':username,
      'password':password,
      'email':email,
      'mobile':mobile
    }
  })
}

//修改用户内容

export function ChangeUser(id,email,phone){
  return request({
    url:`users/${id}`,
    method:'put',
    data:{
      'email':email,
      'mobile':phone
    }
  })
}

//删除用户
export function DeleteUser(id){
  return request({
    url:`users/${id}`,
    method:'delete'
  })
}