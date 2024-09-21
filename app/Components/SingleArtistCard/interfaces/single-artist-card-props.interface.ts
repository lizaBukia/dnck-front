import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

export interface SingleArtistCardPropsInterface {
  artistName: string;
  albums: AlbumInterfaces[];
  biography: string;
  imageSrc: string;
}
