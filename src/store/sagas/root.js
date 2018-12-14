import { watchSearchUsers } from "./search";
import { watchSearchUser } from "./user";
import { watchSearchRepos } from "./repos";
import { watchSearchFollowers } from "./followers";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchSearchUsers(),
    watchSearchUser(),
    watchSearchRepos(),
    watchSearchFollowers()
  ]);
}
