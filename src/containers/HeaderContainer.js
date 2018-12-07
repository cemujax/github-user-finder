import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "components/common/Header";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  static defaultProps = {
    searchTerm: ""
  };

  static propTypes = {
    onSubmit: PropTypes.func,
    searchQuery: PropTypes.string,
    searchTerm: PropTypes.string,
    searchForUser: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleSearchUsers(props.searchQuery);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchQuery !== this.props.searchQuery) {
      this.handleSearchUsers(nextProps.searchQuery);
    }
  }

  handleSearchUsers(searchQuery) {
    if (!searchQuery) {
      return;
    }
    this.props.searchForUser(searchQuery);
  }
  render() {
    const { onSubmit, searchTerm } = this.props;
    return (
      <div>
        <Header onSubmit={onSubmit} searchTerm={searchTerm} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchForUser(search) {
      dispatch({
        type: "SEARCH_REQUEST",
        payload: {
          search
        }
      });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
