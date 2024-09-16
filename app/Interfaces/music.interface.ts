import { AlbumInterface } from './album.interface';

export interface MusicInterface {
  id: number;
  name: string;
  album: AlbumInterface;
  src: string;
}
