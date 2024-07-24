import styles from './Player.module.scss'
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import MusicPlayerResponsive from '../MusicPlayerResponsive/MusicPlayerResponsive';
import { PlayerPropsInterface } from './interfaces/player-props.interface';
import { PlayerType } from './types/player.type';

const Player: PlayerType = (props: PlayerPropsInterface) => {
  return (
    <div>
      <div className={styles.playerWrapper}>
        <MusicPlayer
          musicTitle={'Lose Control'}
          artistName={'Teddy Swing'}
          backgroundImage={'image75.png'}
        />
      </div>
      <div className={styles.responsivePlayerWrapper}>
        <MusicPlayerResponsive
          image={'/image75.png'}
          songName={'Lose Control'}
          artistName={'Teddy Swing'}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
 export default Player