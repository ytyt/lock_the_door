import { SAVE_USER } from "../constants/actions";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
