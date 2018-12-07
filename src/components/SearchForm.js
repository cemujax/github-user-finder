import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    inputValu: ""
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            id="findInput"
            placeholder="input user"
            value={this.state.inputValue}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
