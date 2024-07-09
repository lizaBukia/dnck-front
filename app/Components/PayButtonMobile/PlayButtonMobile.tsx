'use client';
import styles from './PlayButtonMobile.module.scss';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { PlayButtonMobilePropsInterface } from './interfaces/playButtonMobile-props.interface';
import { PlayButtonMobileType } from './types/playButtonMobile.type';
import { useState } from 'react';
import Icon from '../Icon/Icon';

const PlayButtonMobile: PlayButtonMobileType = (
  props: PlayButtonMobilePropsInterface,
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iconName = isPlaying ? IconNameEnum.Pause : IconNameEnum.Play;
  const className: string = props.isDark ? styles.dark : styles.light;
  const onClink = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <button
      onClick={() => {
        onClink();
        props.onClick;
      }}
      className={`${styles.playButton} ${className}`}
      style={{ width: props.width, height: props.width }}
    >
      <Icon name={iconName} isActive={false} width={32} height={32} />
    </button>
  );
};
export default PlayButtonMobile;
