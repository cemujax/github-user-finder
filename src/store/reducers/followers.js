import assignAll from "lodash/fp/assignAll";

const initialState = {
  followers: {},
  isPending: true,
  error: null
};

function followersReducer(state = initialState, action) {
  switch (action.type) {
    case "FOLLOWERS_REQUEST":
      return assignAll([state, { isPending: true }]);
    case "FOLLOWERS_SUCCESS":
      return assignAll([
        state,
        { isPending: false, followers: action.payload }
      ]);
    case "FOLLOWERS_FAILURE": {
      if (!action.error) return state;
      return assignAll([
        state,
        {
          isPending: false,
          error: action.payload
        }
      ]);
    }
    default:
      return state;
  }
}

export default followersReducer;
