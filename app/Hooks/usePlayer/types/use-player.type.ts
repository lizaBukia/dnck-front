import { RefObject } from 'react';
import { PlayerMusicInterface } from '@/app/States/current-music-state-props.interface';

export type usePlayerType = {
  togglePlay: () => void;
  playerRef: RefObject<HTMLAudioElement>;
  currentTime: number | undefined;
  isPlaying: boolean;
  handleProgressChange: React.ChangeEventHandler<HTMLInputElement>;
  playNext: () => void;
  playPrevious: () => void;
  playMusic: (data: PlayerMusicInterface) => void;
  shuffle: () => void;
};
