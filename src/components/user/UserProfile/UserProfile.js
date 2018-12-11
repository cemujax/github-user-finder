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
      blog,
      public_repos,
      followers,
      following
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
            <div className={cx("stats")}>
              <ul className={cx("stats-itemList")}>
                <li className={cx("stats-item")}>
                  <p className={cx("stats-label")}>Repos</p>
                  <p className={cx("stats-value")}>{public_repos}</p>
                </li>
                <li className={cx("stats-item")}>
                  <p className={cx("stats-label")}>Followers</p>
                  <p className={cx("stats-value")}>{followers}</p>
                </li>
                <li className={cx("stats-item")}>
                  <p className={cx("stats-label")}>Follwing</p>
                  <p className={cx("stats-value")}>{following}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
