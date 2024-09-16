import { ArtistInterface } from './artist.interface';

export interface AlbumInterface {
  id: number;
  name: string;
  artists: ArtistInterface[];
  imgUrl: string;
  releaseDate: string;
  createdAt: string;
}
