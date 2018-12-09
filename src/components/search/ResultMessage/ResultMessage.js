import React from "react";

import styles from "./ResultMessage.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ResultMessage = ({ searchTerm, totalCount }) => (
  <div className={cx("result")}>
    <p className={cx("message")}>
      <mark> Result: {totalCount}</mark>
      (Search For <strong>{searchTerm}</strong>)
    </p>
  </div>
);

export default ResultMessage;
