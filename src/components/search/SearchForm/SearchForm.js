import React, { Component } from "react";
import { ReactComponent as SearchIcon } from "./icons8-search.svg";

import styles from "./SearchForm.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SearchForm extends Component {
  state = {
    inputValu: ""
  };
  render() {
    return (
      <div>
        <form className={cx("form")}>
          <input
            type="text"
            className={cx("form-input")}
            id="searchInput"
            placeholder="Search for users"
            value={this.state.inputValue}
          />
          <button type="submit" className={cx("form-btn")}>
            <SearchIcon width={24} height={24} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
