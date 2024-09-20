import { ArtistInterface } from './artist.interface';

export interface AlbumInterfaces {
  id: number;
  name: string;
  artists: ArtistInterface[];
  imgUrl: string;
  releaseDate: string;
  createdAt: string;
  history: { location: string };
}
