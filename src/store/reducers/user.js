import assignAll from "lodash/fp/assignAll";

const initialState = {
  userProfile: {},
  isPending: true,
  error: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_REQUEST":
      return assignAll([state, { isPending: true }]);

    case "USER_SUCCESS":
      return assignAll([
        state,
        { isPending: false, userProfile: action.payload }
      ]);

    case "USER_FAILURE": {
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

export default userReducer;
