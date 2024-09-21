import { ArtistCardsItemsInterface } from './artist-cards-items.interfaces';

export interface ArtistCardPropsInterface extends ArtistCardsItemsInterface {
  albumName: string;
  href: string;
}
