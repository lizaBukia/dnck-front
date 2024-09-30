'use client';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import styles from './PlayButton.module.scss';
import { PlayButtonPropsInterface } from './interfaces/play-button-props.interface';
import { PlayButtonType } from './types/play-button.type';
import { ApiClient } from '@/app/Api/api';
import { currentMusicState } from '@/app/States/States';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';

const PlayButton: PlayButtonType = (props: PlayButtonPropsInterface) => {
  const currentMusic: CurrentMusicStateInterface =
    useRecoilValue(currentMusicState);
  const iconName: IconNameEnum =
    props.icon ||
    (currentMusic.isPlaying ? IconNameEnum.Pause : IconNameEnum.Play);

  const onClick: () => void = useCallback(() => {
    if (!currentMusic.isPlaying) {
      ApiClient.post('/statistics', {
        musicId: `${Number(props.music)}`,
      });
    }
  }, [currentMusic.isPlaying, props.music]);
  return (
    <button
      onClick={() => {
        props.onClick();
        onClick();
      }}
      className={styles.playButton}
      style={{ width: props.width, height: props.width }}
    >
      <Icon
        name={iconName}
        isActive={false}
        width={currentMusic.isPlaying ? 20 : 36}
        height={currentMusic.isPlaying ? 20 : 36}
      />
    </button>
  );
};
export default PlayButton;
