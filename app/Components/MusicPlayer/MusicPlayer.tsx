import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import DownPlaylist from '../DownPlaylists/DownPlaylist';
import Heading from '../Heading/Heading';
import { HeadingTypeEnum } from '../Heading/enums/heading-type.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicPlayer.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';
import { currentMusicState } from '@/app/States/States';
import { PlayerMusicInterface } from '@/app/States/current-music-state-props.interface';

const MusicPlayer: FC = () => {
  const {
    playerRef: audioRef,
    handleProgressChange,
    togglePlay,
    playNext,
    playPrevious,
    shuffle,
    toggleMute,
  } = usePlayer();

  const [music] = useRecoilState(currentMusicState);
  const [data, setData] = useState<PlaylistInterface[]>();

  const currentMusic: PlayerMusicInterface = music.musics[
    music.currentIndex
  ] ?? {
    name: 'No Audio',
    imgLink: '/default.png',
    src: '',
    artistName: 'No Artist',
    id: 0,
    isMuted: false,
  };

  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (audioRef?.current) {
      audioRef.current.volume = Number(event.target.value);
    }
  };

  const { data: per } = useSWR<PlaylistInterface[]>(
    '/playlists/personal',
    fetcher,
  );

  useEffect(() => {
    if (per) {
      setData(per);
    }
  }, [per]);

  return (
    <div>
      <div className={styles.playlist}>
        <div
          className={styles.music}
          style={{ backgroundImage: `url(${currentMusic?.imgLink})` }}
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
                onClick={shuffle}
              />

              <div className={styles.player}>
                <Icon
                  name={IconNameEnum.BackwardDesktop}
                  width={26}
                  onClick={playPrevious}
                  height={26}
                />
                <PlayButton
                  onClick={togglePlay}
                  width={48}
                  height={48}
                  music={currentMusic.id}
                />
                <Icon
                  name={IconNameEnum.ForwardDesktop}
                  width={26}
                  height={26}
                  onClick={playNext}
                />
              </div>
              <div className={styles.volumeControl}>
                <div className={styles.volume}>
                  <Icon
                    name={
                      music.isMuted ? IconNameEnum.Mute : IconNameEnum.Volume
                    }
                    isActive={true}
                    width={24}
                    height={24}
                    onClick={toggleMute}
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
        <div className={styles.header}>
          <Heading type={HeadingTypeEnum.H5}>playlist</Heading>
          <div className={styles.more}>
            <Link href={'/playlist'}>See all</Link>
          </div>
        </div>
        <div>
          {data &&
            data.length > 0 &&
            data.map((playlist) => {
              return (
                <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
                  <DownPlaylist
                    imgUrl={
                      playlist?.musics?.[0]?.album?.history?.location ??
                      '/default.png'
                    }
                    name={playlist.title}
                    key={playlist.id}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
