import {
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  QUERY_SEARCH
} from "../constants";
import { unsplash } from "../../../config";
import { toJson } from "unsplash-js";

export function getSearchResult(query) {
  return dispatch => {
    dispatch({
      type: SEARCH_REQUEST
    });

    unsplash.search
      .photos(query, 1, 100)
      .then(toJson)
      .then(res => {
        console.log(res);
        dispatch(searchSuccess(res.results));
      })
      .catch(error => {
        dispatch(searchFailure(error));
      });
  };
}

export function querySearch(query) {
  return dispatch => {
    dispatch({
      type: QUERY_SEARCH,
      query: query
    });
  };
}

export function searchSuccess(photos) {
  return {
    type: SEARCH_SUCCESS,
    photos: photos
  };
}

export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error: error
  };
}
