import { LOADED } from "../constants/actions";

const initialState = {
  loading: true
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loadingReducer;
