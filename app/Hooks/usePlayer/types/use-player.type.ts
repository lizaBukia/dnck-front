import { RefObject } from 'react';
import { MusicInterface } from '@/app/Interfaces/music.interface';

export type PlayMusicFunction = (
  hit: MusicInterface,
  musics: MusicInterface[],
  index: number,
) => void;

export type usePlayerType = {
  togglePlay: () => void;
  playerRef: RefObject<HTMLAudioElement>;
  currentTime: number | undefined;
  isPlaying: boolean;
  handleProgressChange: React.ChangeEventHandler<HTMLInputElement>;
  playNext: () => void;
  playPrevious: () => void;
  playMusic: PlayMusicFunction;
  shuffle: () => void;
};
