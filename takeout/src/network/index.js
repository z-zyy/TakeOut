import axios from "axios";

export function request(config){
  const network=axios.create({
    baseURL:'http://127.0.0.1:9999/api/private/v1/',
    timeout:5000
  })
  return network(config);
}