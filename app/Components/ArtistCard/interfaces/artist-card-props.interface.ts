import { ArtistCardItemsInterface } from './artist-card-items.interfaces';

export interface ArtistCardPropsInterface extends ArtistCardItemsInterface {
  albumName: string;
  darkMode?: boolean;
}
