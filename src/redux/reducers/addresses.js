import {
  FETCH_ADDRESS_LIST_SUCCESS,
  FETCH_ADDRESS_LIST_ERROR,
} from "../actions";

const initialState = {
  list: [],
  error: false,
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_LIST_SUCCESS:
      return { ...state, list: action.payload };
    case FETCH_ADDRESS_LIST_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default addresses;
