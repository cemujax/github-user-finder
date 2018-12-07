import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import api from "store/api";
import qs from "query-string";

export function* searchUsers(action) {
  try {
    const response = yield call(
      api.searchUsers,
      qs.parse(action.payload.search)
    );
    const data = response.data;

    yield put({ type: "SEARCH_SUCCESS", payload: data });
  } catch (e) {
    yield put({
      type: "SEARCH_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchUsers() {
  yield takeLatest("SEARCH_REQUEST", searchUsers);
}
