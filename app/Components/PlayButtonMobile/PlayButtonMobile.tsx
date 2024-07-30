'use client';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import styles from './PlayButtonMobile.module.scss';
import { PlayButtonMobilePropsInterface } from './interfaces/play-button-mobile-props.interface';
import { PlayButtonMobileType } from './types/play-button-mobile.type';
import { isDarkState } from '@/app/States/States';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const playIcon: IconNameEnum = isDark
    ? IconNameEnum.PlayLight
    : IconNameEnum.Play;
  const pauseIcon: IconNameEnum = props.isDark
    ? IconNameEnum.PauseLight
    : IconNameEnum.Pause;
  const icon: IconNameEnum = isPlaying ? pauseIcon : playIcon;

  const onClick = (): void => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <button
      onClick={() => {
        onClick();
        props.onClick();
      }}
      className={`${className} ${styles.playButton}`}
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
