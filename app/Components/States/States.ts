import { atom } from 'recoil';

// eslint-disable-next-line @typescript-eslint/typedef

// eslint-disable-next-line @typescript-eslint/typedef
export const isModeState = atom<boolean>({
  key: 'mode',
  default: false,
});
