import React from "react";
import SearchForm from "components/search/SearchForm";
import Logo from "components/common/Logo/Logo";

import styles from "./Header.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = ({ onSubmit, searchTerm }) => (
  <header className={cx("header")}>
    <div className={cx("header-content")}>
      <div className={cx("brand")}>
        <Logo />
      </div>
      <div className={cx("right")}>
        <SearchForm onSubmit={onSubmit} initialInputValue={searchTerm} />
      </div>
    </div>
  </header>
);

export default Header;
