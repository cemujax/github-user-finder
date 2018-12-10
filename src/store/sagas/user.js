import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import api from "store/api";

export function* searchUser(action) {
  const {
    payload: { userName }
  } = action;

  try {
    const response = yield call(api.searchUser, userName);
    const userProfile = response.data;
    yield put({
      type: "USER_SUCCESS",
      payload: userProfile
    });
  } catch (e) {
    yield put({
      type: "USER_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchUser() {
  yield takeLatest("USER_REQUEST", searchUser);
}
