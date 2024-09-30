'use client';
import useSWR from 'swr';
import AddToPlaylistButton from '../../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import styles from './SingleAlbumPage.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

const Album = (props: { params: { id: number } }): JSX.Element => {
  const { data } = useSWR<AlbumInterfaces>(
    `/albums/${props.params.id}`,
    fetcher,
  );
  const { playMusic } = usePlayer();

  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            <div className={styles.heading}>
              <Heading type={HeadingTypeEnum.H5}>{`Playlist`}</Heading>
            </div>
            {data?.musics && (
              <HitsCards
                items={data.musics.map((hit, index) => {
                  return {
                    backgroundImage: data.history?.location,
                    album: data,
                    name: hit.name,
                    src: hit.history?.location,
                    id: hit.id,
                    onClick: (): void => {
                      playMusic(hit, data.musics, index);
                    },
                    dropDownItems: [
                      {
                        title: <AddToPlaylistButton musicId={[hit.id]} />,
                      },
                    ],
                  };
                })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
