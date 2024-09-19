'use client';
import { useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import styles from './PlayButtonMobile.module.scss';
import { PlayButtonMobilePropsInterface } from './interfaces/play-button-mobile-props.interface';
import { PlayButtonMobileType } from './types/play-button-mobile.type';
import { currentMusicState, isDarkState } from '@/app/States/States';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const currentMusic: CurrentMusicStateInterface =
    useRecoilValue(currentMusicState);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent): void => {
  //     if (event.code === 'Space') {
  //       event.preventDefault();
  //       props.onClick();
  //     }
  //   };
  //   document.addEventListener('keydown', handleKeyDown);
  //   return (): void => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [props]);

  const className: string = isDark ? styles.dark : styles.light;
  const playIcon: IconNameEnum = isDark
    ? IconNameEnum.Play
    : IconNameEnum.PlayLight;
  const pauseIcon: IconNameEnum = isDark
    ? IconNameEnum.Pause
    : IconNameEnum.PauseLight;
  const icon: IconNameEnum = currentMusic.isPlaying ? pauseIcon : playIcon;

  return (
    <button
      onClick={() => {
        props.onClick();
      }}
      className={`${className} ${styles.playButton}`}
      style={{ width: props.width, height: props.width }}
    >
      <Icon
        name={icon}
        isActive={false}
        width={currentMusic.isPlaying ? 20 : 32}
        height={currentMusic.isPlaying ? 20 : 32}
      />
    </button>
  );
};

export default PlayButtonMobile;
