import Image from 'next/image';
import { RefObject, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import styles from './MusicPlayerResponsive.module.scss';
import { MusicPlayerResponsivePropsInterface } from './interfaces/music-player-responsive-props.interface';
import { MusicPlayerResponsiveType } from './types/music-player-responsive.type';
import { isDarkState } from '@/app/States/States';

const MusicPlayerResponsive: MusicPlayerResponsiveType = (
  props: MusicPlayerResponsivePropsInterface,
) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const forwardIcon: IconNameEnum = isDark
    ? IconNameEnum.ForwardLight
    : IconNameEnum.ForwardDark;
  const backwardIcon: IconNameEnum = isDark
    ? IconNameEnum.BackwardLight
    : IconNameEnum.BackwardDark;
  const iconForward: IconNameEnum = forwardIcon;
  const iconBackward: IconNameEnum = backwardIcon;
  const player: RefObject<HTMLAudioElement> | null =
    useRef<HTMLAudioElement>(null);

  function togglePlay(): void {
    if (player) {
      if (player.current?.paused) {
        player.current.play();
      } else {
        player.current?.pause;
      }
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
          isDark={false}
        />
        <Icon name={iconForward} width={16} height={16} />
      </div>
    </div>
  );
};
export default MusicPlayerResponsive;
