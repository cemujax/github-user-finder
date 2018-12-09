import React from "react";
import { Link } from "react-router-dom";

import styles from "./UserInfo.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const UserInfo = ({ name, avatarUrl }) => (
  <Link to={name}>
    <div className={cx("avatar")}>
      <img title={name} alt={name} src={avatarUrl} width="90" height="90" />
    </div>
    <p className={cx("user-name")}>{name}</p>
  </Link>
);

export default UserInfo;
