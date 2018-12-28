import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import get from "lodash/fp/get";
import styled from "styled-components";

import UserProfile from "components/user/UserProfile";
import Repository from "components/user/Repository";
import Followers from "components/user/Followers";
import Chart from "components/common/Chart";

const getUserName = get("match.params.userName");

const DetailContent = styled.div`
  margin: 0px auto;
  width: 72%;
  padding-top: 10px;
  display: flex;

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`;

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

  componentWillReceiveProps(nextProps) {
    const userName = getUserName(this.props);
    const nextUserName = getUserName(nextProps);

    if (userName !== nextUserName) {
      this.props.searchUser(nextUserName);
    }
  }

  render() {
    const {
      isPending,
      userProfile,
      reposIsPending,
      repositories,
      followersIsPending,
      followers
    } = this.props;

    if (isPending) {
      return <h2>Loading</h2>;
    }

    return (
      <React.Fragment>
        <UserProfile userProfile={userProfile} />

        <DetailContent>
          <Chart repositories={repositories} />
          <Repository isPending={reposIsPending} repositories={repositories} />
          <Followers isPending={followersIsPending} followers={followers} />
        </DetailContent>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { isPending, userProfile } = state.user;
  const { repositories } = state.repos;
  const { followers } = state.followers;

  return {
    isPending: isPending,
    userProfile: userProfile,
    reposIsPending: state.repos.isPending,
    repositories: repositories,
    followersIsPending: state.followers.isPending,
    followers: followers
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
