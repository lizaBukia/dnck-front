import { DropDownItemsInterface } from '../Components/Dropdown/interfaces/dropdown-items-props.interface';

export interface HitsInterface {
  imgUrl: string;
  albumName: string;
  artistName: string;
  src: string;
  dropDownItems?: DropDownItemsInterface[];
}
