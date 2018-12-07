const initialState = {
  items: [],
  total_count: 0,
  isPending: true,
  error: null
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return {
        ...state,
        isPending: true
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        ...action.payload,
        isPending: false,
        error: null
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;
