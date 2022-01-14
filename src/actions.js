export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTER = "REGISTER";
export const SAVE_CREDENTIALS = "SAVE_CREDENTIALS";
export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const CLEAR_CREDENTIALS = "CLEAR_CREDENTIALS";

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
export const clearCredentials = () => ({ type: CLEAR_CREDENTIALS });
