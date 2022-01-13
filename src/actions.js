export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTER = "REGISTER";
export const SAVE_CREDENTIALS = "SAVE_CREDENTIALS";
export const SAVE_USER_INFO = "SAVE_USER_INFO";

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
export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const saveCredentials = (payload) => ({
  type: SAVE_CREDENTIALS,
  payload,
});
