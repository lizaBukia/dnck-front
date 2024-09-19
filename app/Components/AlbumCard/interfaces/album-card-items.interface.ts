import { DropDownItemsInterface } from '../../Dropdown/interfaces/dropdown-items-props.interface';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';

export interface AlbumCardItemsInterface {
  dropDownItems: DropDownItemsInterface[];
  imgUrl: string;
  artists: ArtistInterface[];
  title: string;
}
