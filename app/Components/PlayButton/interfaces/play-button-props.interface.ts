import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import { MusicInterface } from '@/app/Interfaces/music.interface';

export interface PlayButtonPropsInterface {
  icon?: IconNameEnum;
  onClick: () => void;
  width: number;
  height: number;
  music?: number | null;
}
