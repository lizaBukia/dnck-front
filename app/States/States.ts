import { RecoilState, atom } from 'recoil';
import { CurrentMusicStateInterface } from './current-music-state-props.interface';

export const isDarkState: RecoilState<boolean> = atom({
  key: 'isDark',
  default: false,
});

export const currentTimeState: RecoilState<number> = atom({
  key: 'currentTime',
  default: 0,
});

export const currentMusicState: RecoilState<CurrentMusicStateInterface> =
  atom<CurrentMusicStateInterface>({
    key: 'currentMusicState',
    default: {
      currentIndex: 0,
      currentMusicId: null,
      currentTime: 0,
      isPlaying: false,
      musics: [],
    },
  });
