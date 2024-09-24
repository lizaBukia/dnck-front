import { DownPlaylistsMusicsPropsInterface } from './down-playlist-musics.interface';

export interface DownPlaylistsItemsPropsInterface {
  id: number;
  name: string;
  musics: DownPlaylistsMusicsPropsInterface[];
  src: string;
  imgUrl: string;
}
