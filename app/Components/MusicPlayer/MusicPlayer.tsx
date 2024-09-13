import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicPlayer.module.scss';
import { MusicPlayerPropsInterface } from './interfaces/music-player-props.interface';
import { currentMusicState } from '@/app/States/States';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';

// eslint-disable-next-line react/display-name
const MusicPlayer: FC<MusicPlayerPropsInterface> = (props) => {
  const { playerRef: audioRef } = usePlayer();
  const [currentMusic] = useRecoilState(currentMusicState);
  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (audioRef?.current) {
      audioRef.current.volume = Number(event.target.value);
    }
  };

  // console.log(currentMusic.currentTime)

  return (
    <div>
      <div
        className={styles.music}
        style={{ backgroundImage: `url(${props.BackgroundImage})` }}
      >
        <div className={styles.musicPlayer}>
          <div className={styles.heading}>
            <h1>{currentMusic.name}</h1>
            <span>{currentMusic.artistName}</span>
          </div>
          <div>
            <input
              className={styles.input}
              type="range"
              min="0"
              max={audioRef.current?.duration || 0}
              step="0.1"
              value={currentMusic.currentTime}
              onChange={props.handleProgressChange}
            />
            <audio src="/music.mp4" ref={audioRef}></audio>
          </div>
          <div className={styles.playerBoard}>
            <Icon
              name={IconNameEnum.Shuffle}
              isActive={true}
              width={24}
              height={24}
            />

            <div className={styles.player}>
              <Icon
                name={IconNameEnum.BackwardDesktop}
                width={26}
                height={26}
              />
              <PlayButton
                onClick={() => props.onClick()}
                width={48}
                height={48}
                icon={''}
              />
              <Icon name={IconNameEnum.ForwardDesktop} width={26} height={26} />
            </div>
            <div className={styles.volumeControl}>
              <div className={styles.volume}>
                <Icon
                  name={IconNameEnum.Volume}
                  isActive={true}
                  width={24}
                  height={24}
                />
              </div>
              <div className={styles.volumeInput}>
                <input
                  className={styles.volumeStyle}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={handleVolumeChange}
                  defaultValue="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
