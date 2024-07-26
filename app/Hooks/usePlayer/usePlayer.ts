import { RefObject, useRef } from 'react';

export const usePlayer = () => {
  const playerRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (playerRef.current?.paused) {
      playerRef.current.play();
    } else {
      playerRef.current?.pause();
    }
  };

  return { playerRef, togglePlay };
};
