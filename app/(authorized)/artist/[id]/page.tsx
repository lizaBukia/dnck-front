'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/app/Api/fetcher';
import styles from './page.module.scss'
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import SingleArtistCard from '@/app/Components/SingleArtistCard/SingleArtistCard';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import AlbumCards from '@/app/Components/AlbumCards/AlbumCards';
import { currentMusicState } from '@/app/States/States';
import { CurrentMusicStateInterface } from '@/app/States/current-music-state-props.interface';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import AddToPlaylistButton from '../../playlist/components/AddToPlaylistButton/AddToPlaylistButton';
import { SingleArtistPagePropsInterface } from '../interfaces/single-artist-page-props.interface';
import { SingleArtistPageType } from '../type/single-artist-page.type';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  
  const { data: artists } = useSWR<ArtistInterface>(
    `/artists/${props.params.id}`,
    fetcher,
  );
  const { data: musics } = useSWR<MusicInterface[]>('/musics/', fetcher);
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);
  const setMusic: SetterOrUpdater<CurrentMusicStateInterface> =
    useSetRecoilState(currentMusicState);

  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            {artists && (
              <SingleArtistCard
                artistName={`${artists.firstName} ${artists.lastName}`}
                albums={artists.albums}
                biography={artists.biography}
                imageSrc={artists.history.location}
              />
            )}
            <div className={styles.heading}>
              <Heading
                type={HeadingTypeEnum.H5}
              >{`${artists?.firstName} ${artists?.lastName}'s Most Popular Musics`}</Heading>
              <div className={styles.seeAll}>
                <Link href={'/topHits'}>See all</Link>
              </div>
            </div>
            {musics && (
              <HitsCards
                items={musics.slice(0, 9).map((hit) => {
                  return {
                    backgroundImage: hit.album?.history?.location,
                    album: hit.album,
                    name: hit.name,
                    src: hit.history?.location,
                    id: hit.id,
                    onClick: (): void => {
                      setMusic((prevState) => ({
                        ...prevState,
                        currentIndex: 0,
                        currentMusicId: hit.id,
                        musics: [
                          ...musics.map((music) => ({
                            id: music.id,
                            name: music.name,
                            artistName:
                              music.album?.artists.reduce((acc, curr) => {
                                return (acc += `${curr.firstName} ${curr.lastName},`);
                              }, '') ?? 'Unknown Artist',
                            imgLink: music.album?.history?.location ?? '',
                            src: music.history?.location ?? '',
                          })),
                        ],
                      }));
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
          <div className={styles.heading}>
            <Heading
              type={HeadingTypeEnum.H5}
            >{`${artists?.firstName} ${artists?.lastName}'s Most Popular Albums`}</Heading>
            <div className={styles.seeAll}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>
          {albums && (
            <AlbumCards
              items={albums.slice(0, 4).map((album) => ({
                title: album.name,
                imgUrl: album.history.location,
                artists: album.artists,
                dropDownItems: [],
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleArtistPage;
