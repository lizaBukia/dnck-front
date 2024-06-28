import { atom } from 'recoil';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';

// eslint-disable-next-line @typescript-eslint/typedef
export const isIconState = atom({
  key: 'icon',
  default: IconNameEnum.Sun,
});

// eslint-disable-next-line @typescript-eslint/typedef
export const isModeState = atom<boolean>({
  key: 'mode',
  default: false,
});
