import { FC } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import HitsCards from '../HitsCards/HitsCards';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicPlayer.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import { currentMusicState } from '@/app/States/States';

// eslint-disable-next-line react/display-name
const MusicPlayer: FC = () => {
  const { playerRef: audioRef, handleProgressChange, togglePlay } = usePlayer();
  const [currentMusic] = useRecoilState(currentMusicState);
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);

  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (audioRef?.current) {
      audioRef.current.volume = Number(event.target.value);
    }
  };
  // const playNext = () => {
  //   setCurrentTrackIndex((prevIndex) =>
  //     prevIndex + 1 >= tracks.length ? 0 : prevIndex + 1
  //   );
  // };

  // const playPrevious = () => {
  //   setCurrentTrackIndex((prevIndex) =>
  //     prevIndex - 1 < 0 ? tracks.length - 1 : prevIndex - 1
  //   );
  // };
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
                onChange={handleProgressChange}
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
                  onClick={togglePlay}
                  width={48}
                  height={48}
                  icon={''}
                />
                <Icon
                  name={IconNameEnum.ForwardDesktop}
                  width={26}
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
        <div >
          {musics && (
            <HitsCards
              items={musics.map((hit) => ({
                backgroundImage: '/image75.png',
                album: hit.album,
                src: hit.src,
                dropDownItems: [],
              }))}
            />
          )}{' '}
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
