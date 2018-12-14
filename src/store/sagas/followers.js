import { call, put, takeEvery } from "redux-saga/effects";
import api from "store/api";

export function* searchFollower(action) {
  const {
    payload: { url }
  } = action;

  try {
    const response = yield call(api.get, url, {
      params: {
        per_page: 10
      }
    });
    const followers = response.data;
    yield put({
      type: "FOLLOWERS_SUCCESS",
      payload: followers
    });
  } catch (e) {
    yield put({
      type: "FOLLOWERS_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchFollowers() {
  yield takeEvery("FOLLOWERS_REQUEST", searchFollower);
}
