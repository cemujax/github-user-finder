import { watchSearchUsers } from "./search";
import { watchSearchUser } from "./user";
import { watchSearchRepos } from "./repos";
import { watchSearchFollowers } from "./followers";

export default function* rootSaga() {
  yield [
    watchSearchUsers(),
    watchSearchUser(),
    watchSearchRepos(),
    watchSearchFollowers()
  ];
}
