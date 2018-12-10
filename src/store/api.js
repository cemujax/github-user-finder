import axios from "axios";
import assignAll from "lodash/fp/assignAll";
import parseLinkHeader from "parse-link-header";
const GITHUB_API = axios.create({
  baseURL: "https://api.github.com/"
});
export const PER_PAGE = 30;

const addPagination = response => {
  const { data, headers } = response;
  const pagination = parseLinkHeader(headers.link);
  return assignAll([data, { pagination }]);
};

// "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
const searchUsers = params => {
  const defaultParams = {
    per_page: PER_PAGE
  };
  return GITHUB_API.get("/search/users", {
    params: assignAll([defaultParams, params])
  }).then(addPagination);
};

// "user_url": "https://api.github.com/users/{user}",
const searchUser = userName => {
  return GITHUB_API.get(`/users/${userName}`);
};

export default {
  searchUsers,
  searchUser
};
