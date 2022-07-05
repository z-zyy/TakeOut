import { request } from "./index";

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