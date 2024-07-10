'use client';
import styles from './PlayButtonMobile.module.scss';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { PlayButtonMobilePropsInterface } from './interfaces/play-button-mobile-props.interface';
import { PlayButtonMobileType } from './types/play-button-mobile.type';
import { useState } from 'react';
import Icon from '../Icon/Icon';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const className: string = props.isDark ? styles.dark : styles.light;
  const playIcon = props.isDark
    ? IconNameEnum.PlayLight
    : IconNameEnum.PlayDark;
  const pauseIcon = props.isDark ? IconNameEnum.PauseLight : IconNameEnum.Pause;
  const icon = isPlaying ? pauseIcon : playIcon;
  const onClink = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <button
      onClick={() => {
        onClink();
        props.onClick;
      }}
      className={`${className} ${styles.playButton} ${isPlaying ? styles.play : styles.notPlay}`}
      style={{ width: props.width, height: props.width }}
    >
      <Icon name={icon} isActive={false} width={isPlaying ? 28 : 32} height={isPlaying ? 28 : 32} />
    </button>
  );
};
export default PlayButtonMobile;
