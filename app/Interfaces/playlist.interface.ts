import { MusicInterface } from './music.interface';

export interface PlaylistInterface {
  id: number;
  title: string;
  musics: MusicInterface[];
  history: { location: string };
  createdAt: string;
  deletedAt: string;
}
