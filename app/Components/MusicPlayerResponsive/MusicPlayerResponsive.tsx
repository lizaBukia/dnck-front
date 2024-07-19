import Image from 'next/image';
import styles from './MusicPlayerResponsive.module.scss';
import { MusicPlayerResponsivePropsInterface } from './interfaces/music-player-responsive-props.interface';
import Icon from '../Icon/Icon';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { isDarkState } from '@/app/States/States';
import { useRecoilValue } from 'recoil';
import { MusicPlayerResponsiveType } from './types/music-player-responsive.type';
import { useEffect, useRef } from 'react';

const MusicPlayerResponsive: MusicPlayerResponsiveType = (
  props: MusicPlayerResponsivePropsInterface,
) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const forwardIcon: IconNameEnum = isDark
    ? IconNameEnum.ForwardLight
    : IconNameEnum.ForwardDark;
  const backwardIcon = isDark
    ? IconNameEnum.BackwardLight
    : IconNameEnum.BackwardDark;
  const iconforward = forwardIcon;
  const iconBackward = backwardIcon;
  const player = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function togglePlay(): void {
    if (player.current?.paused) {
      player.current.play();
    } else {
      player.current?.pause();
    }
  }

  return (
    <div
      className={`${className} ${styles.playerWrapper}  ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.textWrapper}>
        <div>
          <Image
            className={styles.playerImage}
            src={props.image}
            width={56}
            height={63}
            alt="image"
          />
        </div>
        <div
          className={`${className} ${styles.playerName}  ${isDark ? styles.dark : styles.light}`}
        >
          <h1 className={styles.songName}>{props.songName}</h1>
          <span className={styles.artistName}>{props.artistName}</span>
          <audio src="/music.mp4" ref={player}></audio>
        </div>
      </div>
      <div className={styles.musicPlayer}>
        <Icon name={iconBackward} width={16} height={16} />
        <PlayButtonMobile
          icon={IconNameEnum.Pause}
          onClick={togglePlay}
          width={32}
          height={32}
        />
        <Icon name={iconforward} width={16} height={16} />
      </div>
    </div>
  );
};
export default MusicPlayerResponsive;
