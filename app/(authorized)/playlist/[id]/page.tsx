'use client';
import useSWR from 'swr';
import { UserPlaylistPropsInterface } from '../../playlist-musics/interfaces/use-playlist-props.interface';
import { UserPlaylistType } from '../../playlist-musics/types/user-playlist.type';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';

const UserPlaylist: UserPlaylistType = (props: UserPlaylistPropsInterface) => {
  const { data: playlist } = useSWR<PlaylistInterface>(
    `/playlists/${props.params.id}`,
    fetcher,
  );
  const { playMusic } = usePlayer();

  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            <div className={styles.heading}>
              <Heading type={HeadingTypeEnum.H5}>{`Your Playlist`}</Heading>
            </div>
            {playlist?.musics && (
              <HitsCards
                items={playlist.musics.map((hit, index) => ({
                  backgroundImage: hit.album?.history?.location,
                  album: hit.album,
                  name: hit.name,
                  src: hit.history?.location,
                  id: hit.id,
                  onClick: (): void => {
                    playMusic(hit, playlist.musics, index);
                  },
                }))}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPlaylist;
