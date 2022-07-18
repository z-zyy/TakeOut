import {Display,Hidden} from './mutation_type';

export default {
  [Display](state,payload){
    state.Showdialog=true;
  },
  [Hidden](state,payload){
    state.Showdialog=false;
  }
}