'use client';
import { useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import styles from './PlayButton.module.scss';
import { PlayButtonPropsInterface } from './interfaces/play-button-props.interface';
import { PlayButtonType } from './types/play-button.type';
import { currentMusicState } from '@/app/States/States';

const PlayButton: PlayButtonType = (props: PlayButtonPropsInterface) => {
  const currentMusic = useRecoilValue(currentMusicState);
  const iconName: IconNameEnum = currentMusic.isPlaying
    ? IconNameEnum.Pause
    : IconNameEnum.Play;

  return (
    <button
      onClick={() => {
        props.onClick();
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
