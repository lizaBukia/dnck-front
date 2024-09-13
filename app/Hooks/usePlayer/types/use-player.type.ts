import { RefObject } from 'react';

export type usePlayerType = {
  togglePlay: () => void;
  playerRef: RefObject<HTMLAudioElement>;
  currentTime: number | undefined;
  isPlaying: boolean;
  handleProgressChange:  React.ChangeEventHandler<HTMLInputElement> ;
};
