import { watchSearchUsers } from "./search";

export default function* rootSaga() {
  yield [watchSearchUsers()];
}
