import { call, put } from "redux-saga/effects";

import { setLoading, getRouteSuccess, getRouteError } from "../actions";
import { serverGetRouteCoordinates } from "../../api";

// Сага для построения маршрута
export function* routeSaga(action) {
  yield put(setLoading(true));
  const { from, to } = action.payload;
  const data = yield call(serverGetRouteCoordinates, from, to);
  // console.log('ROUTE DATA', data);
  yield put(setLoading(false));
  if (data) {
    yield put(getRouteSuccess(data));
  } else {
    yield put(getRouteError());
  }
}
