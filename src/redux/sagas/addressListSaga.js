import { call, put } from "redux-saga/effects";

import {
  setLoading,
  fetchAddressListSuccess,
  fetchAddressListError,
} from "../actions";
import { serverGetAddressList } from "../../api";

// Сага для получения списка адресов
export function* addressListSaga(action) {
  yield put(setLoading(true));
  const data = yield call(serverGetAddressList);
  yield put(setLoading(false));
  if (data.addresses) {
    yield put(fetchAddressListSuccess(data.addresses));
  } else {
    yield put(fetchAddressListError());
  }
}