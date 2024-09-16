import MusicPlayer from '../MusicPlayer/MusicPlayer';
import MusicPlayerResponsive from '../MusicPlayerResponsive/MusicPlayerResponsive';
import styles from './Player.module.scss';
import { PlayerPropsInterface } from './interfaces/player-props.interface';
import { PlayerType } from './types/player.type';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';

const Player: PlayerType = (props: PlayerPropsInterface) => {
  const { playerRef, togglePlay, handleProgressChange } = usePlayer();

  
  return (
    <div className={props.className}>
      <div className={styles.playerWrapper}>
        <MusicPlayer
          MusicTitle={'Lose Control'}
          ArtistName={'Teddy Swing'}
          BackgroundImage={'image75.png'}
          onClick={togglePlay}
          ref={playerRef}
          handleProgressChange={handleProgressChange}
        />
      </div>
      <div className={styles.responsivePlayerWrapper}>
        <MusicPlayerResponsive
          image={'/image75.png'}
          songName={'Lose Control'}
          artistName={'Teddy Swing'}
          onClick={togglePlay}
          ref={playerRef}
        />
      </div>
    </div>
  );
};
export default Player;
