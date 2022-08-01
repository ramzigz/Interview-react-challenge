import axios from 'axios';

const albumServices = {
  getAlbums: function (
    payload: {
      start: number,
      limit: number,
    }
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const { limit, start } = payload;
        const resp = await axios
          .get(
            `albums?_limit=${limit}&_start=${start}`);
        resolve(resp);
      } catch (e) {
        return reject(e);
      }
    });
  },
  getAlbumPhotos: function (
    payload: {
      start: number,
      limit: number,
      albumId: string | undefined
    }
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const { albumId, limit, start } = payload;
        if (!albumId) reject('Id error')
        const resp = await axios
          .get(
            `albums/${albumId}/photos?_limit=${limit}&_start=${start}`);
        resolve(resp);
      } catch (e) {
        return reject(e);
      }
    });
  },

};

export default albumServices;
