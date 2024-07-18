import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicPlayer.module.scss';
import { MusicPlayerType } from './types/music-player.type';
import { MusicPlayerPropsInterface } from './interfaces/music-player-props.interface';

const MusicPlayer: MusicPlayerType = (props: MusicPlayerPropsInterface) => {
  const player = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const audioElement = player.current;
    if (audioElement) {
      const updateProgress = () => {
        setCurrentTime(audioElement.currentTime);
      };
      audioElement.addEventListener('timeupdate', updateProgress);
      return () => {
        audioElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (player.current) {
      player.current.currentTime = Number(event.target.value);
    }
  };

  const togglePlay = () => {
    if (player.current?.paused) {
      player.current.play();
    } else {
      player.current?.pause();
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (player.current) {
      player.current.volume = Number(event.target.value);
    }
  };

  const toggleMute = () => {
    if (player.current) {
      player.current.muted = !player.current.muted;
    }
  };

  return (
    <div>
      <div
        className={styles.music}
        style={{ backgroundImage: `url(${props.BackgroundImage})` }}
      >
        <div className={styles.musicPlayer}>
          <div className={styles.heading}>
            <h1>{props.MusicTitle}</h1>
            <span>{props.ArtistName}</span>
          </div>
          <div>
            <input
              className={styles.input}
              type="range"
              min="0"
              max={player.current?.duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
            />
            <audio src="/music.mp4" ref={player}></audio>
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
                icon={IconNameEnum.Pause}
                onClick={togglePlay}
                width={48}
                height={48}
              />
              <Icon name={IconNameEnum.ForwardDesktop} width={26} height={26} />
            </div>
            <div className={styles.volumeControl}>
              <Icon
                name={IconNameEnum.Volume}
                isActive={true}
                width={24}
                height={24}
                onClick={toggleMute}
              />

              <input
                className={styles.volumeInput}
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
  );
};
export default MusicPlayer;
