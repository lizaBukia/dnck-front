import { AlbumInterfaces } from './album.interfaces';

export interface ArtistInterface {
  id: number;
  firstName: string;
  lastName: string;
  biography: string;
  albums: AlbumInterfaces[];
  history: {
    location: string;
  };
  createdAt: string | Date;
}
