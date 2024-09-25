import Image from 'next/image';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import styles from './MusicPlayerResponsive.module.scss';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState, isDarkState } from '@/app/States/States';

const MusicPlayerResponsive = (): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMusic] = useRecoilState(currentMusicState);
  const { playerRef: audioRef, togglePlay } = usePlayer();
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;

  const toggleExpand = (): void => setIsExpanded(!isExpanded);
  console.log(currentMusic, 'awdawd');
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.fixedBottomBar} ${isExpanded ? styles.hide : ''}`}
        onClick={toggleExpand}
      >
        <div className={styles.textWrapper}>
          <div>
            <Image
              className={styles.playerImage}
              src={currentMusic?.musics[0]?.imgLink}
              width={56}
              height={63}
              alt="image"
            />
          </div>
          <div className={`${className} ${styles.playerName}`}>
            <h1 className={isDark ? styles.songNameDark : styles.songName}>
              {currentMusic?.musics[0]?.name}
            </h1>
            <span
              className={isDark ? styles.artistName : styles.artistNameLight}
            >
              {currentMusic.musics[0]?.artistName}
            </span>
            <audio ref={audioRef}></audio>
          </div>
        </div>
        <div className={styles.playPauseButton}>
          <PlayButtonMobile
            icon={IconNameEnum.Pause}
            onClick={togglePlay}
            width={32}
            height={32}
            isDark={false}
          />
        </div>
      </div>

      <div
        className={`${styles.fullPlayer} ${
          isExpanded ? styles.translateUp : styles.translateDown
        }`}
      >
        <div
          className={
            isDark ? styles.fullPlayerContent : styles.fullPlayerContentLight
          }
        >
          <div className={styles.fullPlayerHeader}>
            <div onClick={toggleExpand} className={styles.collapseButton}>
              <Icon
                name={isExpanded ? IconNameEnum.Collapse : IconNameEnum.Expand}
                width={24}
                height={24}
              />
            </div>
            <h2 className={styles.fullPlayerTitle}>Swipe Down</h2>
            <div className={styles.playbackControlSpacing}></div>
          </div>
          <div
            className={styles.fullPlayerBody}
            style={{ backgroundImage: `url(${currentMusic.imgLink})` }}
          >
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerResponsive;
