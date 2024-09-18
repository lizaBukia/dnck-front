import { AlbumInterface } from './album.interfaces';

export interface MusicInterface {
  id: number;
  name: string;
  album: AlbumInterface;
  src: string;
}
