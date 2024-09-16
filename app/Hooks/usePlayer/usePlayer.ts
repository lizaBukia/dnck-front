import { RefObject, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usePlayerType } from './types/use-player.type';
import { currentMusicState } from '@/app/States/States';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';

const globalPlayerRef: RefObject<HTMLAudioElement> = { current: null };

export const usePlayer: () => void = (): usePlayerType => {
  const playerRef: RefObject<HTMLAudioElement> = globalPlayerRef;
  const [currentMusic, setCurrentMusic] =
    useRecoilState<CurrentMusicStateInterface>(currentMusicState);

  const handleProgressChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (playerRef?.current) {
        const newTime: number = Number(event.target.value);
        playerRef.current.currentTime = newTime;
        setCurrentMusic((prevState) => ({
          ...prevState,
          currentTime: newTime,
        }));
      }
    },
    [playerRef, setCurrentMusic],
  );

  useEffect(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;
    if (audioElement) {
      const updateProgress = (): void => {
        setCurrentMusic((prevState) => ({
          ...prevState,
          currentTime: audioElement.currentTime,
        }));
      };
      audioElement.addEventListener('timeupdate', updateProgress);

      return (): void => {
        audioElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [playerRef, setCurrentMusic, currentMusic]);

  const togglePlay: () => void = useCallback(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;
    if (audioElement) {
      if (audioElement.paused) {
        audioElement
          .play()
          .then(() => {
            setCurrentMusic((prevState) => ({ ...prevState, isPlaying: true }));
          })
          .catch(() => {});
      } else {
        audioElement.pause();
        setCurrentMusic((prevState) => ({ ...prevState, isPlaying: false }));
      }
    }
  }, [playerRef, setCurrentMusic]);

  useEffect(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;

    if (audioElement && currentMusic.src) {
      if (audioElement.src !== currentMusic.src) {
        audioElement.src = currentMusic.src;
        audioElement.load();
        togglePlay();
      }
    }
  }, [currentMusic.src, playerRef, togglePlay]);

  return {
    playerRef,
    togglePlay,
    handleProgressChange,
    currentTime: currentMusic.currentTime,
    isPlaying: currentMusic.isPlaying,
  };
};
