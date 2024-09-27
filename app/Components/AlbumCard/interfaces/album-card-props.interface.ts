import { AlbumCardItemsInterface } from './album-card-items.interface';

export interface AlbumCardPropsInterface extends AlbumCardItemsInterface {
  darkMode?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
