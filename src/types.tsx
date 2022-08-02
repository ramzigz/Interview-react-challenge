export interface AlbumPhotosType {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface DataType {
    loading: boolean,
    detailsLoading: boolean,
    albums: AlbumType[],
    selectedAlbum: AlbumType | undefined,
    albumPhotos: AlbumPhotosType[],
    albumsStart: number,
    photosStart: number
}

export interface AlbumType {
    title: string,
    id: number,
    userId: number
}

