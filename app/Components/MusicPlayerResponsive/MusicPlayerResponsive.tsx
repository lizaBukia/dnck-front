import Image from 'next/image';
import { RefObject, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
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
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);

  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const player: RefObject<HTMLAudioElement> | null =
    useRef<HTMLAudioElement>(null);

  function togglePlay(): void {
    if (player?.current) {
      if (player.current.paused) {
        player.current.play();
      } else {
        player.current.pause();
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
        <Icon
          name={dark ? IconNameEnum.BackwardDark : IconNameEnum.BackwardLight}
          width={16}
          height={16}
        />
        <PlayButtonMobile
          icon={IconNameEnum.Pause}
          onClick={togglePlay}
          width={32}
          height={32}
          isDark={false}
        />
        <Icon
          name={dark ? IconNameEnum.ForwardDark : IconNameEnum.ForwardLight}
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
export default MusicPlayerResponsive;
