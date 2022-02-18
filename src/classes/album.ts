import db from "../models";

const { Album } = db;
export default class AlbumService {
  createAlbum(album: any) {
    return true;
  }
  getAlbum(id: number) {
    return {};
  }
  deleteAlbum(id: number) {
    return true;
  }
  getAllAlbums() {
    return [];
  }
}
