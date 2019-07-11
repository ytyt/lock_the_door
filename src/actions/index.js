import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOADED,
  SAVE_USER,
  ADD_RECORD,
  GET_RECORD_REQUEST,
  GET_RECORD_SUCCESS,
  UPDATE_RECORD
} from "../constants/actions";

export const loaded = () => {
  return {
    type: LOADED
  };
};

export const logIn = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = user => {
  const { displayName, email, uid } = user;
  return {
    type: LOGIN_SUCCESS,
    payload: {
      displayName,
      email,
      uid
    }
  };
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};

export const logInFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const saveUser = user => {
  return {
    type: SAVE_USER,
    payload: user
  };
};

export const addRecordRequest = user => {
  return {
    type: ADD_RECORD,
    payload: user
  };
};

export const getRecord = user => {
  return {
    type: GET_RECORD_REQUEST
  };
};

export const getRecordSuccess = docs => {
  return {
    type: GET_RECORD_SUCCESS,
    payload: docs
  };
};

export const updateRecord = doc => {
  return {
    type: UPDATE_RECORD,
    payload: doc
  };
};
