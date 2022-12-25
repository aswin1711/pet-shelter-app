import { LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT, SAVE_SETTINGS } from '../actions';

const initialState = {
  loggedInShelter: false,
  loading: false
};

const logInReducer = (state=initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return Object.assign({}, state, { loading: action.loading });
  }
  else if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      loggedInShelter: action.shelter,
      loading: false
    });
  } 
  else if (action.type === LOG_OUT) {
    return Object.assign({}, state, {
    loggedInShelter: false
    })
  }
  else if (action.type === SAVE_SETTINGS) {
    return state
  }
  return state;
}

export default logInReducer;