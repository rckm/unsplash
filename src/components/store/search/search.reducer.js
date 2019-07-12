import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants";

const initialState = {
  loading: true,
  error: null,
  results: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.results
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return {
        state
      };
  }
}
