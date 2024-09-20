import { FC } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicPlayer.module.scss';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState } from '@/app/States/States';
import { PlayerMusicInterface } from '@/app/States/current-music-state-props.interface';

// eslint-disable-next-line react/display-name
const MusicPlayer: FC = () => {
  const {
    playerRef: audioRef,
    handleProgressChange,
    togglePlay,
    playNext,
    playPrevious,
  } = usePlayer();
  const [music] = useRecoilState(currentMusicState);

  const currentMusic: PlayerMusicInterface = music.musics[
    music.currentIndex
  ] ?? {
    name: 'No Audio',
    imgLink: '/default.png',
    src: '',
    artistName: 'No Artist',
    id: 0,
  };

  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (audioRef?.current) {
      audioRef.current.volume = Number(event.target.value);
    }
  };

  // const shuffleArray = useCallback((array: number[]) => {
  //   const shuffled = [...array];
  //   for (let i = shuffled.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //   }
  //   return shuffled;
  // }, []);

  return (
    <div>
      <div className={styles.playlist}>
        <div
          className={styles.music}
          style={{ backgroundImage: `url(${currentMusic.imgLink})` }}
        >
          <div className={styles.musicPlayer}>
            <div className={styles.heading}>
              <h2>{currentMusic.name}</h2>
              <span>{currentMusic.artistName}</span>
            </div>
            <div>
              <input
                className={styles.input}
                type="range"
                min="0"
                max={audioRef.current?.duration || 0}
                step="0.1"
                value={music.currentTime}
                onChange={handleProgressChange}
              />
              <audio ref={audioRef}></audio>
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
                  onClick={playPrevious}
                  height={26}
                />
                <PlayButton onClick={togglePlay} width={48} height={48} />
                <Icon
                  name={IconNameEnum.ForwardDesktop}
                  width={26}
                  onClick={playNext}
                  height={26}
                />
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
    </div>
  );
};
export default MusicPlayer;
