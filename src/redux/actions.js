export const SET_LOADING = "SET_LOADING";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTER = "REGISTER";
export const SAVE_CREDENTIALS = "SAVE_CREDENTIALS";
export const UPDATE_CREDENTIALS = "UPDATE_CREDENTIALS";
export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";
export const FETCH_ADDRESS_LIST = "FETCH_ADDRESS_LIST";
export const FETCH_ADDRESS_LIST_SUCCESS = "FETCH_ADDRESS_LIST_SUCCESS";
export const FETCH_ADDRESS_LIST_ERROR = "FETCH_ADDRESS_LIST_ERROR";
export const GET_ROUTE = "GET_ROUTE";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_ERROR = "GET_ROUTE_ERROR";
export const RESET_ROUTE = "RESET_ROUTE";

export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const register = (email, password, name, surname) => ({
  type: REGISTER,
  payload: { email, password, name, surname },
});
export const saveToken = (payload) => ({ type: SAVE_TOKEN, payload });
export const saveCredentials = (payload) => ({
  type: SAVE_CREDENTIALS,
  payload,
});
export const updateCredentials = (payload) => ({
  type: UPDATE_CREDENTIALS,
  payload,
});
export const clearCredentials = () => ({ type: CLEAR_CREDENTIALS });
export const fetchAddressList = () => ({ type: FETCH_ADDRESS_LIST });
export const fetchAddressListSuccess = (payload) => ({
  type: FETCH_ADDRESS_LIST_SUCCESS,
  payload,
});
export const fetchAddressListError = () => ({ type: FETCH_ADDRESS_LIST_ERROR });
export const getRoute = (payload) => ({ type: GET_ROUTE, payload });
export const getRouteSuccess = (payload) => ({
  type: GET_ROUTE_SUCCESS,
  payload,
});
export const getRouteError = () => ({ type: GET_ROUTE_ERROR });
export const resetRoute = () => ({ type: RESET_ROUTE });
