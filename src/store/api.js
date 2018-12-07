import axios from "axios";
import assignAll from "lodash/fp/assignAll";

const GITHUB_API = axios.create({
  baseURL: "https://api.github.com/"
});
export const PER_PAGE = 30;

const searchUsers = params => {
  const defaultParams = {
    per_page: PER_PAGE
  };
  return GITHUB_API.get("/search/users", {
    params: assignAll([defaultParams, params])
  });
};

export default {
  searchUsers
};
