import { RecoilState, atom } from 'recoil';

export const isDarkState: RecoilState<boolean> = atom({
  key: 'isDark',
  default:
    typeof window !== 'undefined' && localStorage.getItem('isDark') === 'true',
});
