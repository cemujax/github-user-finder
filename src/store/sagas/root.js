import { watchSearchUsers } from "./search";
import { watchSearchUser } from "./user";

export default function* rootSaga() {
  yield [watchSearchUsers(), watchSearchUser()];
}
