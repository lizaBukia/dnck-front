import { RecoilState, atom } from 'recoil';

export const isDarkState: RecoilState<boolean> = atom({
  key: 'dark',
  default: false,
});
