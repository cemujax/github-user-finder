import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ResultMessage from "components/search/ResultMessage";
import UserInfo from "components/user/UserInfo";

import styles from "components/user/UserInfo/UserInfo.scss";
import classNames from "classnames/bind";
import Pagination from "components/common/Pagination/Pagination";

const cx = classNames.bind(styles);

class SearchResultContainer extends Component {
  static defaultProps = {
    totalCount: 0,
    items: [],
    pagination: {}
  };

  static propTypes = {
    totalCount: PropTypes.number,
    items: PropTypes.array,
    pagination: PropTypes.object
  };

  render() {
    const { totalCount, items, isPending, searchTerm, pagination } = this.props;

    if (!searchTerm) return null;

    if (isPending) {
      return <h2>Loading</h2>;
    }
    return (
      <div>
        <ResultMessage searchTerm={searchTerm} totalCount={totalCount} />
        <div className={cx("user-list")}>
          <ul className={cx("user-ul")}>
            {items.map(user => (
              <li key={user.id} className={cx("user-li")}>
                <UserInfo name={user.login} avatarUrl={user.avatar_url} />
              </li>
            ))}
          </ul>
        </div>
        <Pagination {...pagination} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { total_count, items, isPending, pagination } = state.search;
  return {
    totalCount: total_count,
    items: items,
    isPending: isPending,
    pagination: pagination
  };
}
export default connect(mapStateToProps)(SearchResultContainer);
