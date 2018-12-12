import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";
import reposReducer from "./repos";

export default combineReducers({
  search: searchReducer,
  user: userReducer,
  repos: reposReducer
});
