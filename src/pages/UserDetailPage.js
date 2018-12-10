import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import UserDetailContainer from "containers/UserDetailContainer";

import qs from "query-string";
import curry from "lodash/fp/curry";
import { PER_PAGE } from "store/api";
import Footer from "components/common/Footer";

export const pushUrlQuery = curry((push, query) => {
  push({
    pathname: "/search",
    search: `per_page=${PER_PAGE}&page=1&q=${query}`
  });
});

class UserDetailPage extends Component {
  render() {
    const {
      location,
      history: { push }
    } = this.props;
    const parsedSearch = qs.parse(location.search);
    const searchTerm = parsedSearch.q;
    return (
      <div>
        <HeaderContainer
          searchTerm={searchTerm}
          searchQuery={qs.stringify(parsedSearch)}
          onSubmit={pushUrlQuery(push)}
        />
        <UserDetailContainer {...this.props} />
        <Footer />
      </div>
    );
  }
}

export default UserDetailPage;
