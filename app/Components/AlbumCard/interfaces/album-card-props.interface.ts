import { DropDownItemsInterface } from '../../Dropdown/interfaces/dropdown-items-props.interface';
import { AlbumCardItemsInterface } from './album-card-items.interface';

export interface AlbumCardPropsInterface extends AlbumCardItemsInterface {
  darkMode: boolean;
  dropdownItems: DropDownItemsInterface[];
}
