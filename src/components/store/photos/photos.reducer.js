import {
  PHOTOS_FAILURE,
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTO_FAILURE,
  PHOTO_REQUEST,
  PHOTO_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  QUERY_SEARCH
} from "../constants";

const initialState = {
  loading: true,
  error: null,
  photos: [],
  photo: {},
  query: ""
};

export default function photos(state = initialState, action) {
  switch (action.type) {
    case PHOTOS_REQUEST:
    case PHOTO_REQUEST:
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case QUERY_SEARCH:
      return {
        ...state,
        query: action.query
      };
    case PHOTOS_SUCCESS:
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        photos: action.photos
      };
    case PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        photo: action.photo
      };
    case PHOTOS_FAILURE:
    case PHOTO_FAILURE:
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
