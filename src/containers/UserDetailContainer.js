import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import get from "lodash/fp/get";
import UserProfile from "components/user/UserProfile";

const getUserName = get("match.params.userName");

class UserDetailContainer extends Component {
  static defaultProps = {
    userProfile: {}
  };

  static propTypes = {
    userPrfile: PropTypes.object,
    searchUser: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.props.searchUser(getUserName(props));
  }

  render() {
    const { isPending, userProfile } = this.props;

    if (isPending) {
      return <h2>Loading</h2>;
    }

    return (
      <React.Fragment>
        <UserProfile userProfile={userProfile} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { isPending, name, html_url, userProfile } = state.user;
  return {
    isPending: isPending,
    name: name,
    userProfile: userProfile,
    html_url: html_url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchUser(userName) {
      if (!userName) return;
      dispatch({
        type: "USER_REQUEST",
        payload: {
          userName
        }
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);
