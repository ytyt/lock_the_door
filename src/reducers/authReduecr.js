import { LOGIN_SUCCESS, LOGOUT, SAVE_USER } from "../constants/actions";

const initialState = {
  uid: null,
  displayName: null,
  email: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { uid, displayName, email } = action.payload;
      return { ...state, uid, displayName, email };
    case LOGOUT:
      return { ...state, uid: null, displayName: null, email: null };
    case SAVE_USER:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
