import { RecoilState, atom } from 'recoil';

export const isDarkState: RecoilState<boolean> = atom({
  key: 'isDark',
  default: false,
});

export const currentTimeState: RecoilState<number> = atom({
  key: 'currentTime',
  default: 0,
});
