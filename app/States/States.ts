import { RecoilState, atom } from 'recoil';

export const isDarkState: RecoilState<boolean> = atom({
  key: 'isDark',
  default: false,
});
