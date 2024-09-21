import React, { useState } from 'react';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import styles from './MusicPlayerResponsive.module.scss';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState, isDarkState } from '@/app/States/States';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import HitsCard from '../HitsCard/HitsCard';
import HitsCards from '../HitsCards/HitsCards';
import { fetcher } from '@/app/Api/fetcher';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import useSWR from 'swr';

const MusicPlayerResponsive = () => {
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMusic] = useRecoilState(currentMusicState);
  const { playerRef: audioRef, togglePlay } = usePlayer();
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;

  const toggleExpand = () => setIsExpanded(!isExpanded);

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
              src={currentMusic.imgLink}
              width={56}
              height={63}
              alt="image"
            />
          </div>
          <div className={`${className} ${styles.playerName}`}>
            <h1 className={styles.songName}>{currentMusic.name}</h1>
            <span className={styles.artistName}>{currentMusic.artistName}</span>
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
        <div className={styles.fullPlayerContent}>
          <div className={styles.fullPlayerHeader}>
            <button onClick={toggleExpand} className={styles.collapseButton}>
              <Icon name={isExpanded ? IconNameEnum.Expand : IconNameEnum.Collapse} width={24} height={24} />
            </button>
            <h2 className="text-lg font-semibold">Swipe Down</h2>
            <div className={styles.playbackControlSpacing}></div>
          </div>
          <MusicPlayer />
          <div className={styles.playlistSection}>
            <h3 className={styles.playlistTitle}>Your Playlist</h3>
            <ul>
              {[1, 2, 3].map((index) => (
                <li key={index} className={styles.playlistItem}>
                  <HitsCards
                    items={musics?.map((hit) => ({
                      backgroundImage: '/image75.png',
                      album: hit.album,
                      src: hit.src,
                      dropDownItems: [],
                    }))}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerResponsive;
