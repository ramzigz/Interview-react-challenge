import albumServices from '../../services/albumServices';
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_FAILED,
  GET_ALBUM_PHOTOS_REQUEST,
  GET_ALBUM_PHOTOS_SUCCESS,
  GET_ALBUM_PHOTOS_FAILED,
} from '../types';

export const getAlbumsAction = (
  payload: {
    start: number,
    limit: number,
  }) => {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({
      type: GET_ALBUMS_REQUEST,
    });
    const { limit, start } = payload;

    albumServices
      .getAlbums({ start, limit })
      .then((response: any) => {
        dispatch({
          type: GET_ALBUMS_SUCCESS,
          payload: { data: response.data, start },
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_ALBUMS_FAILED,
          payload: e,
        });
      });
  };
};
export const getAlbumPhotosAction = (
  payload: {
    albumId: string | undefined,
    start: number,
    limit: number,
  }) => {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    const { albumId, start, limit } = payload;

    dispatch({
      type: GET_ALBUM_PHOTOS_REQUEST,
      payload: albumId
    });

    albumServices
      .getAlbumPhotos({ albumId, start, limit })
      .then((response: any) => {
        dispatch({
          type: GET_ALBUM_PHOTOS_SUCCESS,
          payload: { data: response.data, start },
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_ALBUM_PHOTOS_FAILED,
          payload: e,
        });
      });
  };
};