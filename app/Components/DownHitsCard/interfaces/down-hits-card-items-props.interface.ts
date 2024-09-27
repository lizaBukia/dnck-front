import { DropDownItemsInterface } from '../../Dropdown/interfaces/dropdown-items-props.interface';
import { PlayButtonPropsInterface } from '../../PlayButton/interfaces/play-button-props.interface';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

export interface DownHitsCardItemsInterface {
  dropDownItems?: DropDownItemsInterface[];
  backgroundImage: string;
  album: AlbumInterfaces;
  button?: PlayButtonPropsInterface[];
  src: string;
  name: string;
  id: number;
  onClick: () => void;
}
