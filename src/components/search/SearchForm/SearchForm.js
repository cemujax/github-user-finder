import React, { Component } from "react";
import { ReactComponent as SearchIcon } from "./icons8-search.svg";

import styles from "./SearchForm.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SearchForm extends Component {
  state = {
    inputValue: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.initialInputValue
    };
  }
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();

    if (!this.state.inputValue) {
      return;
    }

    this.props.onSubmit(this.state.inputValue);
  };
  render() {
    const { handleInputChange, handleOnSubmit } = this;
    return (
      <div>
        <form className={cx("form")} onSubmit={handleOnSubmit}>
          <input
            type="text"
            className={cx("form-input")}
            id="searchInput"
            placeholder="Search for users"
            value={this.state.inputValue}
            onChange={handleInputChange}
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
