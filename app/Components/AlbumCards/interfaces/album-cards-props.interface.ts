import { AlbumCardItemsInterface } from '../../AlbumCard/interfaces/album-card-items.interface';

export interface AlbumCardsPropsInterface {
  albumName: string;
  artistName: string;
  image: string;
  items: AlbumCardItemsInterface[];
}
