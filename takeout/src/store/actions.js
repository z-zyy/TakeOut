import {CgDialog} from './mutation_type';

export default {
  ShowDialog(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit(CgDialog);
    })
  }
}