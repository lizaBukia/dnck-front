import { AlbumInterfaces } from './album.interfaces';

export interface ArtistInterface {
  firstName: string;
  lastName: string;
  biography: string;
  album: AlbumInterfaces[];
  history: {
    location: string;
  };
}
