import { watchSearchUsers } from "./search";
import { watchSearchUser } from "./user";
import { watchSearchRepos } from "./repos";

export default function* rootSaga() {
  yield [watchSearchUsers(), watchSearchUser(), watchSearchRepos()];
}
