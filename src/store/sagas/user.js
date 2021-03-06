import { call, put, takeEvery } from "redux-saga/effects";
import api from "store/api";

function* searchAdditionalDatao(data) {
  yield put({
    type: "REPOS_REQUEST",
    payload: {
      url: data.repos_url
    }
  });

  yield put({
    type: "FOLLOWERS_REQUEST",
    payload: {
      url: data.followers_url
    }
  });
}

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

    yield* searchAdditionalDatao(userProfile);
  } catch (e) {
    yield put({
      type: "USER_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchUser() {
  yield takeEvery("USER_REQUEST", searchUser);
}
