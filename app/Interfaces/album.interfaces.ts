import { ArtistInterface } from './artist.interface';

export interface AlbumInterfaces {
  title: ReactNode;
  history: any;
  id: number;
  name: string;
  artists: ArtistInterface[];
  imgUrl: string;
  releaseDate: string;
  createdAt: string;
}
