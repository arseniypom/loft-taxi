import { call, put } from "redux-saga/effects";

import {
  setLoading,
  logIn,
  saveToken,
  saveCredentials,
  clearCredentials,
} from "../actions";
import { serverGetCredentials, serverLogIn, serverRegister } from "../../api";

// Сага для отправки данных на сервер во время логина
export function* authenticateSaga(action) {
  yield put(setLoading(true));
  const { email, password } = action.payload;
  const data = yield call(serverLogIn, email, password);
  yield put(setLoading(false));
  if (data.success) {
    localStorage.setItem("token", JSON.stringify(data.token));
    yield put(saveToken(data.token));
    yield put(logIn(data.token));
  }
}
// Сага для получения ранее сохраненных платежных данных во время логина
export function* logInSaga(action) {
  const data = yield call(serverGetCredentials, action.payload);
  if (data) {
    yield put(
      saveCredentials({
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cardName: data.cardName,
        cvc: data.cvc,
      })
    );
  }
}
// Сага для очищения сохраненных в сторе данных пользователя
export function* logOutSaga() {
  yield put(clearCredentials());
}
// Сага для отправки регистрационных данных на сервер
export function* registrationSaga(action) {
  yield put(setLoading(true));
  const { email, password, name, surname } = action.payload;
  const data = yield call(serverRegister, email, password, name, surname);
  yield put(setLoading(false));
  if (data.success) {
    localStorage.setItem("token", JSON.stringify(data.token));
    yield put(saveToken(data.token));
    yield put(logIn(data.token));
  }
}
