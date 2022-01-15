import { call, put } from "redux-saga/effects";

import { saveCredentials } from "../actions";
import { serverSendCredentials } from "../../api";

// Сага для отправки на сервер платежных данных
export function* updateCredentialsSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(serverSendCredentials, {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    token,
  });
  if (success) {
    localStorage.setItem(
      "billingInfo",
      JSON.stringify({ cardNumber, expiryDate, cardName, cvc })
    );
    yield put(saveCredentials({ cardNumber, expiryDate, cardName, cvc }));
  }
}
