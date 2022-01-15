import {
  AUTHENTICATE,
  REGISTER,
  LOG_IN,
  LOG_OUT,
  setLoading,
  logIn,
  saveToken,
  saveCredentials,
  clearCredentials,
} from "./actions";
import { serverGetCredentials, serverLogIn, serverRegister } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    store.dispatch(setLoading(true))
    const { email, password } = action.payload;
    const data = await serverLogIn(email, password);
    store.dispatch(setLoading(false))
    if (data.success) {
      localStorage.setItem("token", JSON.stringify(data.token));
      store.dispatch(logIn(data.token));
    }
  } else if (action.type === LOG_IN) {
    const data = await serverGetCredentials(action.payload);
    if (data) {
      store.dispatch(
        saveCredentials({
          cardNumber: data.cardNumber,
          expiryDate: data.expiryDate,
          cardName: data.cardName,
          cvc: data.cvc,
        })
      );
    }
    next(action);
  } else if (action.type === LOG_OUT) {
    store.dispatch(clearCredentials());
    next(action);
  } else if (action.type === REGISTER) {
    store.dispatch(setLoading(true))
    const { email, password, name, surname } = action.payload;
    const data = await serverRegister(email, password, name, surname);
    store.dispatch(setLoading(false))
    if (data.success) {
      localStorage.setItem("token", JSON.stringify(data.token));
      store.dispatch(saveToken(data.token));
      next(action);
    }
  } else {
    next(action);
  }
};
