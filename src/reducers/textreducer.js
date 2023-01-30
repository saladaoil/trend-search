import {SEND_TEXT} from './reducers/index'

const initialAppState = {
  text: '',
};

const textreducer = (state = initialAppState, action) => {
  if (action.type === SEND_TEXT) {
    return Object.assign({}, state, {
      text: action.text
    });
  } else {
    return state;
  }
};

export default textreducer;