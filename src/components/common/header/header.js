import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "components/SearchForm";

import styles from "./Header.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx("header")}>
    <div className={cx("header-content")}>
      <div className={cx("brand")}>
        <Link to="/search">GitHub User Finder</Link>
      </div>
      <div className={cx("right")}>
        <SearchForm />
      </div>
    </div>
  </header>
);

export default Header;
