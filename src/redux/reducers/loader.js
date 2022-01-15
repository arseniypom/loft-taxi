import { SET_LOADING } from "../actions";

const initialState = {
  isLoading: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { isLoading: action.payload };
    default:
      return state;
  }
};

export default loading;