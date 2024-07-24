'use client';
import styles from './PlayButtonMobile.module.scss';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { PlayButtonMobilePropsInterface } from './interfaces/play-button-mobile-props.interface';
import { PlayButtonMobileType } from './types/play-button-mobile.type';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import { isDarkState } from '@/app/States/States';
import { useRecoilValue } from 'recoil';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const playIcon: IconNameEnum = isDark
    ? IconNameEnum.PlayLight
    : IconNameEnum.Play;
  const pauseIcon = isDark ? IconNameEnum.PauseLight : IconNameEnum.Pause;
  const icon = isPlaying ? pauseIcon : playIcon;

  const onClick = () => {
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <button
      onClick={() => {
        onClick();
        props.onClick();
      }}
      className={`${className} ${styles.playButton} ${isPlaying ? styles.play : styles.notPlay}`}
      style={{ width: props.width, height: props.width }}
    >
      <Icon
        name={icon}
        isActive={false}
        width={isPlaying ? 28 : 32}
        height={isPlaying ? 28 : 32}
      />
    </button>
  );
};

export default PlayButtonMobile;
