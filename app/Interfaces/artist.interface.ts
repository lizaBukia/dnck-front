import { AlbumInterfaces } from './album.interfaces';

export interface ArtistInterface {
  firstName: string;
  lastName: string;
  biography: string;
  albums: AlbumInterfaces[];
  history: {
    location: string;
  };
}
