import { AlbumInterfaces } from './album.interfaces';
import { MusicInterface } from './music.interface';

export interface PlaylistInterface {
  id: number;
  title: string;
  musics: MusicInterface[];
  history: { location: string };
  createdAt: string | Date;
  deletedAt: string;
}
