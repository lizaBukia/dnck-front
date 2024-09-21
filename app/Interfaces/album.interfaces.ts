import { ArtistInterface } from './artist.interface';
import { MusicInterface } from './music.interface';

export interface AlbumInterfaces {
  title: string;
  id: number;
  name: string;
  artists: ArtistInterface[];
  musics: MusicInterface[];
  imgUrl: string;
  releaseDate: string;
  createdAt: string;
  history: {
    location: string;
  };
}
