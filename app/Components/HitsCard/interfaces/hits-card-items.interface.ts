import { DropDownItemsInterface } from '../../Dropdown/interfaces/dropdown-items-props.interface';
import { PlayButtonPropsInterface } from '../../PlayButton/interfaces/play-button-props.interface';
import { AlbumInterface } from '@/app/Interfaces/album.interface';

export interface HitsCardItemsInterface {
  dropDownItems?: DropDownItemsInterface[];
  backgroundImage: string;
  album: AlbumInterface;
  button?: PlayButtonPropsInterface[];
  src: string;
}
