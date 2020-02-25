import headerReducer from '../common/header/header_store/reducer';
import {combineReducers} from 'redux';

const reducer= combineReducers({
  header: headerReducer
})

export default reducer;
