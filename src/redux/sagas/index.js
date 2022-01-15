import { takeEvery } from "redux-saga/effects";

import {
  AUTHENTICATE, LOG_IN, LOG_OUT, REGISTER, UPDATE_CREDENTIALS,
} from "../actions";
import { authenticateSaga, logInSaga, logOutSaga, registrationSaga } from "./authSaga";
import { updateCredentialsSaga } from "./paymentSaga";

export default function* handleSagas() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
  yield takeEvery(LOG_IN, logInSaga);
  yield takeEvery(LOG_OUT, logOutSaga);
  yield takeEvery(REGISTER, registrationSaga);
  
  yield takeEvery(UPDATE_CREDENTIALS, updateCredentialsSaga);
}