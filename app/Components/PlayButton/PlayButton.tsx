'use client'
import styles from './PlayButton.module.scss';
import { PlayButtonPropsInterface } from './interfaces/playButton-props.interface';
import { PlayButtonType } from './types/playButton.type';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import Icon from '../Icon/Icon';
import { useState } from 'react';

const PlayButton: PlayButtonType = (props: PlayButtonPropsInterface) => {
  const [isPlaying, setIsPLaying] = useState(false)
  const iconName = isPlaying ? IconNameEnum.Pause : IconNameEnum.Plus;

  const onClick = () => {
    setIsPLaying(!isPlaying)
  }
  return (

    <button
      onClick={() =>{
        onClick()
        props.onClick()
      }}
      className={`${styles.playButton} ${styles[props.type]}`}
    >
      <Icon name={iconName} isActive={false} width={24} height={24} />
    </button>
  );
};
export default PlayButton;
