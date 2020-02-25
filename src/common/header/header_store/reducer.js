import {actionTypes} from './index';
import {fromJS} from 'immutable';


const defaultState=fromJS({
  focused : false
})

export default  (state=defaultState, action)=> {
  if(action.type===actionTypes.INPUT_FOCUS){
    return state.set('focused',true);
    //set 方法是返回一个全新的对象，并不是修改
  }
  if(action.type===actionTypes.INPUT_BLUR){

    return state.set('focused',false);

  }

  return state;
}
