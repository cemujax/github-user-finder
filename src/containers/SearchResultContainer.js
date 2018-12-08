import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ResultMessage from "components/search/ResultMessage";
import UserInfo from "components/user/UserInfo";

class SearchResultContainer extends Component {
  static defaultProps = {
    totalCount: 0,
    items: []
  };

  static propTypes = {
    totalCount: PropTypes.number,
    items: PropTypes.array
  };

  render() {
    const { totalCount, items, isPending, searchTerm } = this.props;

    if (!searchTerm) return null;

    if (isPending) {
      return <h2>Loading</h2>;
    }
    return (
      <div>
        <ResultMessage searchTerm={searchTerm} totalCount={totalCount} />
        <ul>
          {items.map(user => (
            <li key={user.id}>
              <UserInfo name={user.login} avatarUrl={user.avatar_url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps SRcontainer -", state);
  const { total_count, items, isPending } = state.search;
  return {
    totalCount: total_count,
    items: items,
    isPending: isPending
  };
}
export default connect(mapStateToProps)(SearchResultContainer);