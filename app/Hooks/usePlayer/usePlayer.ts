import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useRecoilState, atom } from 'recoil';
import { usePlayerType } from './types/use-player.type';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';
import { currentMusicState } from '@/app/States/States';
import { log } from 'console';

const globalPlayerRef: RefObject<HTMLAudioElement> = { current: null };

export const usePlayer = (): usePlayerType => {
  const playerRef = globalPlayerRef;
  const [currentMusic, setCurrentMusic] = useRecoilState<CurrentMusicStateInterface>(currentMusicState);

  const handleProgressChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    if (playerRef?.current) {
      const newTime = Number(event.target.value);
      playerRef.current.currentTime = newTime;
      setCurrentMusic((prevState) => ({
        ...prevState,
        currentTime: newTime,
      }));
      console.log(currentMusic, 'currs')
    }
  }, [playerRef, setCurrentMusic]);

  useEffect(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;
    if (audioElement) {
      const updateProgress = (): void => {
        console.log(audioElement.currentTime)
        setCurrentMusic((prevState) => ({
          ...prevState,
          currentTime: audioElement.currentTime,
        }));
        console.log(currentMusic, 'currs')
      };
      audioElement.addEventListener('timeupdate', updateProgress);

      return (): void => {
        audioElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [playerRef, setCurrentMusic, currentMusic]);

  const togglePlay = useCallback(() => {
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
  }, [currentMusic.src, togglePlay]);

  return {
    playerRef,
    togglePlay,
    handleProgressChange,
    currentTime: currentMusic.currentTime,
    isPlaying: currentMusic.isPlaying,
  };
};