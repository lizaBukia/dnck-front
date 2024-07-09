'use client';
import styles from './PlayButton.module.scss';
import { PlayButtonPropsInterface } from './interfaces/play-button-props.interface';
import { PlayButtonType } from './types/play-button.type';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import Icon from '../Icon/Icon';
import { useState } from 'react';

const PlayButton: PlayButtonType = (props: PlayButtonPropsInterface) => {
  const [isPlaying, setIsPLaying] = useState(false);
  const iconName = isPlaying ? IconNameEnum.Pause : IconNameEnum.PlayDark;

  const onClick = () => {
    setIsPLaying(!isPlaying);
  };
  return (
    <button
      onClick={() => {
        onClick();
        props.onClick();
      }}
      className={styles.playButton}
      style={{ width: props.width, height: props.width }}
    >
      <Icon name={iconName} isActive={false} width={isPlaying ? 20 : 36} height={isPlaying ? 20 : 36} />
    </button>
  );
};
export default PlayButton;