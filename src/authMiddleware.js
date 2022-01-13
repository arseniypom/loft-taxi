import {
  AUTHENTICATE,
  REGISTER,
  logIn,
  saveUserInfo,
} from "./actions";
import { serverLogIn, serverRegister } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password);
    if (data.success) {
      store.dispatch(logIn(data.token));
    }
  } else if (action.type === REGISTER) {
    const { email, password, name, surname } = action.payload;
    const data = await serverRegister(email, password, name, surname);
    if (data.success) {
      localStorage.setItem("user", JSON.stringify({ email, name, surname }));
      store.dispatch(saveUserInfo({ email, name, surname }));
      store.dispatch(logIn(data.token));
    }
  } else {
    next(action);
  }
};
