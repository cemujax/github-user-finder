import React from "react";

import styles from "./ResultMessage.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ResultMessage = ({ searchTerm, totalCount }) => (
  <div>
    <p>
      Result: <b>{totalCount}</b>
      (Search For <b>{searchTerm}</b>)
    </p>
  </div>
);

export default ResultMessage;
