import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import flow from "lodash/fp/flow";
import first from "lodash/fp/first";

import styles from "./Pagination.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Pagination extends Component {
  static defaultProps = {
    prev: {},
    next: {}
  };
  static propTypes = {
    prev: PropTypes.object,
    next: PropTypes.object
  };
  getSearchQuery = flow(
    url => url.match(/(\?.+)/),
    first
  );
  renderLink = pagination => {
    const { url, rel, text } = pagination;
    if (!url) return null;

    const link = this.getSearchQuery(url);

    return (
      <Link to={link} rel={rel} className={cx("link")}>
        <span>{text}</span>
      </Link>
    );
  };

  render() {
    const { prev, next } = this.props;
    const { renderLink } = this;

    const prevLink = renderLink({
      url: prev.url,
      rel: "prev",
      text: "Previous"
    });

    const nextLink = renderLink({
      url: next.url,
      rel: "next",
      text: "Next"
    });
    return (
      <div className={cx("pagination")}>
        {prevLink}
        {nextLink}
      </div>
    );
  }
}

export default Pagination;
