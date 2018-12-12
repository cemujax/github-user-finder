import assignAll from "lodash/fp/assignAll";

const initialState = {
  repositories: {},
  isPending: true,
  error: null
};

function reposReducer(state = initialState, action) {
  switch (action.type) {
    case "REPOS_REQUEST":
      return assignAll([state, { isPending: true }]);
    case "REPOS_SUCCESS":
      return assignAll([
        state,
        { isPending: false, repositories: action.payload }
      ]);
    case "REPOS_FAILURE": {
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

export default reposReducer;
