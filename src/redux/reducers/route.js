import {
  GET_ROUTE_SUCCESS,
  GET_ROUTE_ERROR,
  RESET_ROUTE,
} from "../actions";

const initialState = {
  coordinates: [],
  error: false
};

const route = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTE_SUCCESS:
      return { ...state, error: false, coordinates: action.payload };
    case GET_ROUTE_ERROR:
      return { ...state, error: true };
    case RESET_ROUTE:
      return initialState;
    default:
      return state;
  }
};

export default route;