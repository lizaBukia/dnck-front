import { RefObject, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usePlayerType } from './types/use-player.type';
import { currentMusicState } from '@/app/States/States';
import {
  CurrentMusicStateInterface,
  PlayerMusicInterface,
} from '@/app/States/current-music-state-props.interface';

const globalPlayerRef: RefObject<HTMLAudioElement> = { current: null };

export const usePlayer = (): usePlayerType => {
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

  const playNext = (): void => {
    if (currentMusic.currentIndex < currentMusic.musics.length - 1) {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex: prevState.currentIndex + 1,
        currentMusicId: prevState.musics[prevState.currentIndex + 1].id,
      }));
    }
  };

  const playPrevious = (): void => {
    console.log(
      currentMusic.currentIndex > 0,
      'sest',
      currentMusic.currentIndex,
      currentMusic.musics,
    );
    if (currentMusic.currentIndex > 0) {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex: prevState.currentIndex - 1,
        currentMusicId: prevState.musics[prevState.currentIndex - 1].id,
      }));
    }
  };

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

  const playMusic = (data: PlayerMusicInterface): void => {
    const currentIndex: number = currentMusic.musics.findIndex(
      (music) => music.id === data.id,
    );

    console.log(data);

    if (currentIndex !== -1) {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex,
      }));
    } else {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex: prevState.musics.length,
        currentMusicId: data.id,
        musics: [...prevState.musics, data],
      }));
    }
  };

  console.log(currentMusic);

  useEffect(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;

    if (audioElement && currentMusic.musics[currentMusic.currentIndex]?.src) {
      if (
        audioElement.src !== currentMusic.musics[currentMusic.currentIndex].src
      ) {
        audioElement.src = currentMusic.musics[currentMusic.currentIndex].src;
        audioElement.load();
        togglePlay();
      }
    }
  }, [currentMusic.currentIndex, currentMusic.musics, playerRef, togglePlay]);

  return {
    playerRef,
    togglePlay,
    handleProgressChange,
    currentTime: currentMusic.currentTime,
    isPlaying: currentMusic.isPlaying,
    playPrevious,
    playNext,
    playMusic,
  };
};
