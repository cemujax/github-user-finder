import { call, put, takeEvery } from "redux-saga/effects";
import api from "store/api";
import qs from "query-string";

export function* searchUsers(action) {
  try {
    const response = yield call(
      api.searchUsers,
      qs.parse(action.payload.search)
    );

    yield put({ type: "SEARCH_SUCCESS", payload: response });
  } catch (e) {
    yield put({
      type: "SEARCH_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchUsers() {
  yield takeEvery("SEARCH_REQUEST", searchUsers);
}
