import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants";

const initialState = {
  searchLoading: true,
  searchError: null,
  results: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
        searchError: null
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchError: null,
        results: action.results
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        searchLoading: false,
        searchError: action.error
      };
    default:
      return state;
  }
}
