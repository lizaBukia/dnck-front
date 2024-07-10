'use client';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import styles from './PlayButtonMobile.module.scss';
import { PlayButtonMobilePropsInterface } from './interfaces/play-button-mobile-props.interface';
import { PlayButtonMobileType } from './types/play-button-mobile.type';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const className: string = props.isDark ? styles.dark : styles.light;
  const playIcon: IconNameEnum = props.isDark
    ? IconNameEnum.PlayLight
    : IconNameEnum.Play;
  const pauseIcon: IconNameEnum = props.isDark
    ? IconNameEnum.PauseLight
    : IconNameEnum.Pause;
  const icon: IconNameEnum = isPlaying ? pauseIcon : playIcon;
  const onClink = (): void => {
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
