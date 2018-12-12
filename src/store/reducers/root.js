import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";
import reposReducer from "./repos";
import followersReducer from "./followers";

export default combineReducers({
  search: searchReducer,
  user: userReducer,
  repos: reposReducer,
  followers: followersReducer
});
