import { DataType } from '../../types';
import { GET_ALBUMS_FAILED, GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS, GET_ALBUM_PHOTOS_FAILED, GET_ALBUM_PHOTOS_REQUEST, GET_ALBUM_PHOTOS_SUCCESS } from '../types';




const INITIAL_STATE: DataType = {
  loading: false,
  detailsLoading: false,
  albums: [],
  selectedAlbum: undefined,
  albumPhotos: [],
  albumsStart: -1,
  photosStart: -1
};

const albumsReducer = (state = INITIAL_STATE, action: { type: any; payload?: any }) => {
  switch (action.type) {

    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,

      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload.start !== state.albumsStart ? [...state.albums, ...action.payload.data] : state.albums,
        albumsStart: action.payload.start,
        loading: false,
      };
    case GET_ALBUMS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case GET_ALBUM_PHOTOS_REQUEST:
      const album = state.albums.findIndex(item => +item.id === +action.payload);
      return {
        ...state,
        detailsLoading: true,
        selectedAlbum: album !== -1 ? state.albums[album] : undefined
      };
    case GET_ALBUM_PHOTOS_SUCCESS:
    
      return {
        ...state,
        albumPhotos: action.payload.start !== state.photosStart ? [...state.albumPhotos, ...action.payload.data] : state.albumPhotos,
        photosStart: action.payload.start,
        detailsLoading: false,
      };
    case GET_ALBUM_PHOTOS_FAILED:
      return {
        ...state,
        detailsLoading: false,
      };

    //NOTHING TO DO
    default:
      return {
        ...state,
      };
  }
};
export default albumsReducer;