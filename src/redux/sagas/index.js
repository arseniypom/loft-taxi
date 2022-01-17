import { takeEvery } from "redux-saga/effects";

import {
  AUTHENTICATE, GET_CREDENTIALS, LOG_OUT, REGISTER, UPDATE_CREDENTIALS, FETCH_ADDRESS_LIST, GET_ROUTE
} from "../actions";
import { authenticateSaga, getCredentialsSaga, logOutSaga, registrationSaga } from "./authSaga";
import { updateCredentialsSaga } from "./paymentSaga";
import { addressListSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

export default function* handleSagas() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
  yield takeEvery(LOG_OUT, logOutSaga);
  yield takeEvery(REGISTER, registrationSaga);
  
  yield takeEvery(UPDATE_CREDENTIALS, updateCredentialsSaga);
  yield takeEvery(GET_CREDENTIALS, getCredentialsSaga);

  yield takeEvery(FETCH_ADDRESS_LIST, addressListSaga);

  yield takeEvery(GET_ROUTE, routeSaga);
}