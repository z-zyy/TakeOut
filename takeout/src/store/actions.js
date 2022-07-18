import {Display,Hidden} from './mutation_type';

export default {
  //展示dialog
  ShowDialog(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit(Display);
    })
  },
  //隐藏dialog
  DisDialog(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit(Hidden);
    })
  }
}