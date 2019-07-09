import { PHOTOS_FAILURE, PHOTOS_REQUEST, PHOTOS_SUCCESS } from "../constants";

const initialState = {
  loading: true,
  error: null,
  photos: []
};

export default function photos(state = initialState, action) {
  switch (action.type) {
    case PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        photos: action.photos
      };
    case PHOTOS_FAILURE:
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
