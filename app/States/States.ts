import { RecoilState, atom } from 'recoil';

export const isModeState: RecoilState<boolean> = atom({
  key: 'dark',
  default: false,
});
