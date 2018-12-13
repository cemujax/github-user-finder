import React, { Component } from "react";

import styles from "./Followers.scss";
import classNames from "classnames/bind";
import UserInfo from "components/user/UserInfo";

const cx = classNames.bind(styles);

class Followers extends Component {
  render() {
    const { followers, isPending } = this.props;
    return (
      <div className={cx("followers")}>
        <h2>Followers</h2>
        {isPending ? (
          <h2>Loading</h2>
        ) : followers.length > 0 ? (
          <ul className={cx("followers-list")}>
            {followers.map(follower => (
              <li key={follower.id} className={cx("follower")}>
                <UserInfo
                  name={follower.login}
                  avatarUrl={follower.avatar_url}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No Followers</p>
        )}
      </div>
    );
  }
}

export default Followers;
