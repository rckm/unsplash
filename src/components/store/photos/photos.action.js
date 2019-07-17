import {
  PHOTOS_FAILURE,
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTO_FAILURE,
  PHOTO_REQUEST,
  PHOTO_SUCCESS
} from "../constants";
import { unsplash } from "../../../config";
import { toJson } from "unsplash-js";

/**
 *
 * @param {Number} page Показать страницу фотографий
 * @param {Number} perPage Показать количество картинок
 */
export function getPhotos(page, perPage) {
  return (dispatch, getState) => {
    const { photos } = getState();

    if (photos.photos.length) return;

    dispatch({
      type: PHOTOS_REQUEST
    });

    unsplash.photos
      .listPhotos(page, perPage)
      .then(toJson)
      .then(res => {
        dispatch(photosSuccess(res));
      })
      .catch(error => {
        dispatch(photosFailure(error));
      });
  };
}

export function getSinglePhoto(id) {
  return dispatch => {
    dispatch({
      type: PHOTO_REQUEST
    });

    unsplash.photos
      .getPhoto(id)
      .then(toJson)
      .then(res => {
        dispatch(photoSucess(res));
      })
      .catch(error => {
        dispatch(photoFailure(error));
      });
  };
}

export function photoSucess(photo) {
  return {
    type: PHOTO_SUCCESS,
    photo: photo
  };
}

export function photosSuccess(photos) {
  return {
    type: PHOTOS_SUCCESS,
    photos: photos
  };
}

export function photoFailure(error) {
  return {
    type: PHOTO_FAILURE,
    error: error
  };
}

export function photosFailure(error) {
  return {
    type: PHOTOS_FAILURE,
    error: error
  };
}
