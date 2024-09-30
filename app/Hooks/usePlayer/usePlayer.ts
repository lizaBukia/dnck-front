'use client';
import { RefObject, useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { PlayMusicFunction, usePlayerType } from './types/use-player.type';
import { MusicInterface } from '@/app/Interfaces/music.interface';
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
      if (playerRef.current) {
        const newTime: number = Number(event.target.value);
        playerRef.current.currentTime = newTime;
        setCurrentMusic((prevState) => ({
          ...prevState,
          currentTime: newTime,
        }));
        localStorage.setItem('currentTime', String(newTime));
      }
    },
    [playerRef, setCurrentMusic],
  );

  useEffect(() => {
    const currentTime: string | null = localStorage.getItem('currentTime');
    if (currentTime) {
      setCurrentMusic((prevState) => ({
        ...prevState,
        currentTime: Number(currentTime),
      }));
      if (playerRef.current) {
        playerRef.current.currentTime = Number(currentTime);
      }
    }
  }, [setCurrentMusic, playerRef]);

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

  useEffect(() => {
    const audioElement: HTMLAudioElement | null = playerRef.current;
    if (audioElement) {
      const updateProgress = (): void => {
        if (audioElement.currentTime > 1) {
          localStorage.setItem('currentTime', String(audioElement.currentTime));
        }
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
  }, [playerRef, setCurrentMusic]);

  const playNext = (): void => {
    if (
      currentMusic.musics.length > 0 &&
      currentMusic.currentIndex < currentMusic.musics.length - 1
    ) {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex: prevState.currentIndex + 1,
        currentMusicId: prevState.musics[prevState.currentIndex + 1].id,
      }));
    }
  };

  const playPrevious = (): void => {
    if (currentMusic.currentIndex > 0) {
      setCurrentMusic((prevState: CurrentMusicStateInterface) => ({
        ...prevState,
        currentIndex: prevState.currentIndex - 1,
        currentMusicId: prevState.musics[prevState.currentIndex - 1].id,
      }));
    }
  };

  const shuffle = (): void => {
    const shuffled: PlayerMusicInterface[] = [...currentMusic.musics];
    for (let i: number = shuffled.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCurrentMusic((prevState) => ({ ...prevState, musics: shuffled }));
  };

  const playMusic: PlayMusicFunction = useCallback(
    (hit, musics, index) => {
      if (currentMusic.currentMusicId === hit.id) {
        return;
      }

      setCurrentMusic((prevState) => ({
        ...prevState,
        currentIndex: index,
        currentMusicId: hit.id,
        musics: musics.map((music: MusicInterface) => ({
          id: music.id,
          name: music.name,
          artistName:
            music.album?.artists?.reduce?.((acc, curr) => {
              return (acc += `${curr.firstName} ${curr.lastName},`);
            }, '') ?? 'Unknown Artist',
          imgLink: music.album?.history?.location ?? '',
          src: music.history?.location ?? '',
        })),
      }));
    },
    [currentMusic.currentMusicId, setCurrentMusic],
  );

  const toggleMute = (): void => {
    const audioElement: HTMLAudioElement | null = playerRef.current;
    if (audioElement) {
      audioElement.muted = !audioElement.muted;
      setCurrentMusic((prevState) => ({
        ...prevState,
        isMuted: audioElement.muted,
      }));
    }
  };

  return {
    playerRef,
    togglePlay,
    handleProgressChange,
    currentTime: currentMusic.currentTime,
    isPlaying: currentMusic.isPlaying,
    playPrevious,
    playNext,
    playMusic,
    shuffle,
    toggleMute,
  };
};
