import { combineReducers } from 'redux';
import text from './textreducer';

const reducer = combineReducers({
  text,
});

export default reducer;