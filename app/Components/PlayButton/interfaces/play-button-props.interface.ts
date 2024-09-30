import { IconNameEnum } from '../../Icon/enums/icon-name.enum';

export interface PlayButtonPropsInterface {
  icon?: IconNameEnum;
  onClick: () => void;
  width: number;
  height: number;
  music?: number | null;
}
