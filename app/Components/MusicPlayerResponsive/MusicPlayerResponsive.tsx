import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import styles from './MusicPlayerResponsive.module.scss';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState, isDarkState } from '@/app/States/States';
import { PlayerMusicInterface } from '@/app/States/current-music-state-props.interface';

// eslint-disable-next-line react/display-name
const MusicPlayerResponsive: FC = () => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const [music] = useRecoilState(currentMusicState);
  const {
    playerRef: audioRef,
    togglePlay,
    playNext,
    playPrevious,
  } = usePlayer();

  const currentMusic: PlayerMusicInterface = music.musics?.[
    music?.currentIndex
  ] ?? {
    name: 'No Audio',
    imgLink: '/default.png',
    src: '',
    artistName: 'No Artist',
    id: 0,
  };

  return (
    <div className={`${className} ${styles.playerWrapper}`}>
      <div className={styles.textWrapper}>
        <div>
          <Image
            className={styles.playerImage}
            src={currentMusic?.imgLink}
            width={56}
            height={63}
            alt="image"
          />
        </div>
        <div className={`${className} ${styles.playerName}`}>
          <h1 className={styles.songName}>{currentMusic?.name}</h1>
          <span className={styles.artistName}>{currentMusic?.artistName}</span>
          <audio ref={audioRef}></audio>
        </div>
      </div>
      <div className={styles.musicPlayer}>
        <Icon
          name={isDark ? IconNameEnum.BackwardDark : IconNameEnum.BackwardLight}
          width={16}
          height={16}
          onClick={playPrevious}
        />
        <PlayButtonMobile
          icon={IconNameEnum.Pause}
          onClick={togglePlay}
          width={32}
          height={32}
          isDark={false}
        />
        <Icon
          name={isDark ? IconNameEnum.ForwardDark : IconNameEnum.ForwardLight}
          width={16}
          height={16}
          onClick={playNext}
        />
      </div>
    </div>
  );
};

export default MusicPlayerResponsive;
