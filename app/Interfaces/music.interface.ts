import { AlbumInterfaces } from './album.interfaces';

export interface MusicInterface {
  id: number;
  name: string;
  album: AlbumInterfaces;
  src: string;
}
