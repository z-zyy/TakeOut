import {CgDialog} from './mutation_type';

export default {
  [CgDialog](state,payload){
    state.Showdialog=!state.Showdialog;
  }
}