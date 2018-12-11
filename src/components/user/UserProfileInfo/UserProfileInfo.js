import React, { Component } from "react";
import isNull from "lodash/fp/isNull";
import { ReactComponent as CompanyIcon } from "./company.svg";
import { ReactComponent as LocationIcon } from "./location.svg";
import { ReactComponent as BlogIcon } from "./blog.svg";

import styles from "./UserProfileInfo.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class UserProfileInfo extends Component {
  renderIcon = Icon => {
    return <Icon width={20} height={20} />;
  };

  renderCompany = company => {
    if (!company) return null;
    return (
      <li className={cx("item")}>
        {this.renderIcon(CompanyIcon)}
        <p className={cx("text")}>{company}</p>
      </li>
    );
  };

  renderLocation = location => {
    if (!location) return null;
    return (
      <li className={cx("item")}>
        {this.renderIcon(LocationIcon)}
        <p className={cx("text")}>{location}</p>
      </li>
    );
  };

  renderBlog = blog => {
    if (!blog) return null;
    return (
      <li className={cx("item")}>
        {this.renderIcon(BlogIcon)}
        <p className={cx("text")}>
          <a href={blog} className={cx("link")}>
            {blog}
          </a>
        </p>
      </li>
    );
  };

  render() {
    const { company, location, blog } = this.props;
    const { renderCompany, renderLocation, renderBlog } = this;

    if (isNull(company) && isNull(location) && isNull(blog)) return null;

    return (
      <div className={cx("profile-info")}>
        <ul className={cx("item-list")}>
          {renderCompany(company)}
          {renderLocation(location)}
          {renderBlog(blog)}
        </ul>
      </div>
    );
  }
}

export default UserProfileInfo;
