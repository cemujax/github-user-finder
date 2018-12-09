import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import SearchResultContainer from "containers/SearchResultContainer";

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

class DefaultPage extends Component {
  render() {
    const {
      match,
      location,
      history: { push }
    } = this.props;
    const parsedSearch = qs.parse(location.search);
    const searchTerm = parsedSearch.q;

    console.log("match", match);
    console.log("location", location);
    console.log("parsedSearch", parsedSearch);

    return (
      <div>
        <HeaderContainer
          searchTerm={searchTerm}
          searchQuery={qs.stringify(parsedSearch)}
          onSubmit={pushUrlQuery(push)}
        />
        <SearchResultContainer {...match} searchTerm={searchTerm} />
        <Footer />
      </div>
    );
  }
}

export default DefaultPage;
