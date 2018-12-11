import React, { Component } from "react";
import UserProfileInfo from "components/user/UserProfileInfo";

import styles from "./UserProfile.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class UserProfile extends Component {
  render() {
    const {
      login,
      name,
      avatar_url,
      html_url,
      bio,
      company,
      location,
      blog
    } = this.props.userProfile;
    return (
      <div className={cx("user-detail")}>
        <div className={cx("user-profile")}>
          <div className={cx("avatar")}>
            <img
              src={avatar_url}
              alt={`${login}'s avatar`}
              title={`${login}'s avatar`}
            />
          </div>
          <div className={cx("profile-info")}>
            <div className={cx("title")}>
              {name ? <h3>{name}</h3> : null}
              <p className={cx("user-id")}>
                <a href={html_url}>#{login}</a>
              </p>
            </div>
            <div className={cx("bio")}>{bio ? <p>{bio}</p> : null}</div>

            <UserProfileInfo
              company={company}
              location={location}
              blog={blog}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
