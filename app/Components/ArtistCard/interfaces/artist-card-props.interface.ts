import { ArtistCardItemsInterface } from './artist-card-items.interface';

export interface ArtistCardPropsInterface extends ArtistCardItemsInterface {
  darkMode?: boolean;
  href: string;
}
