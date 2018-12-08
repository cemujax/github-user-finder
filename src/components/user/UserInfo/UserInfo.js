import React from "react";

import styles from "./UserInfo.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserInfo = ({ name, avatarUrl }) => (
  <React.Fragment>
    <p>{name}</p>
    <img title={name} alt={name} src={avatarUrl} width="90" height="90" />
  </React.Fragment>
);

export default UserInfo;
