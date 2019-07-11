// import { SAVE_USER } from "../constants/actions";
import { GET_RECORD_SUCCESS, UPDATE_RECORD } from "../constants/actions";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECORD_SUCCESS:
      return { list: action.payload };
    case UPDATE_RECORD:
      return {
        list: [...state.list, action.payload]
      };
    default:
      return state;
  }
};

export default userReducer;
