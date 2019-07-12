import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants";
import { unsplash } from "../../../config";

/**
 * @author blitzero
 * @param {String} query То, что ввел пользователь
 * @param {Number} page Показать ему страницу из который нужно показать рузультат, по-умолчанию 1
 * @param {Number} perPage Показать кол-во элементов на странице, по-умолчанию 10
 */
export function getSearchResult(query, page, perPage) {
  return dispatch => {
    dispatch({
      type: SEARCH_REQUEST
    });

    unsplash.search
      .photos(query, page, perPage)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(searchSuccess([...res.results]));
      })
      .catch(error => {
        dispatch(searchFailure(error));
      });
  };
}

export function searchSuccess(results) {
  return {
    type: SEARCH_SUCCESS,
    results: results
  };
}

export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error: error
  };
}
