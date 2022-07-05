import { request } from "./index";

export function getMenu(){
  return request({
    url:'/menus'
  })
}