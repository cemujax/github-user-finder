import { call, put, takeEvery } from "redux-saga/effects";
import api from "store/api";

export function* searchRepos(action) {
  const {
    payload: { url }
  } = action;

  try {
    const response = yield call(api.get, url, {
      params: {
        per_page: 8,
        sort: "pushed"
      }
    });
    const repos = response.data;
    yield put({
      type: "REPOS_SUCCESS",
      payload: repos
    });
  } catch (e) {
    yield put({
      type: "REPOS_FAILURE",
      error: true,
      payload: e
    });
  }
}

export function* watchSearchRepos() {
  yield takeEvery("REPOS_REQUEST", searchRepos);
}
