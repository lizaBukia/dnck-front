'use client';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import MusicPlayerResponsive from '../MusicPlayerResponsive/MusicPlayerResponsive';
import styles from './Player.module.scss';
import { PlayerPropsInterface } from './interfaces/player-props.interface';
import { PlayerType } from './types/player.type';

const Player: PlayerType = (props: PlayerPropsInterface) => {
  console.log('player.tsx')
  return (
    <div className={props.className}>
      <div className={styles.playerWrapper}>
        <MusicPlayer />
      </div>
      <div className={styles.responsivePlayerWrapper}>
        <MusicPlayerResponsive />
      </div>
    </div>
  );
};
export default Player;
