import { ArtistInterface } from '../(authorized)/page';

export interface AlbumInterface {
  id: number;
  name: string;
  artists: ArtistInterface[];
  imgUrl: string;
  releaseDate: string;
  createdAt: string;
}
