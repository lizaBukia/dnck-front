'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '../Api/fetcher';
import AlbumCard from '../Components/AlbumCard/AlbumCard';
import AlbumCards from '../Components/AlbumCards/AlbumCards';
import ModeSwitcher from '../Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '../Components/Heading/Heading';
import { HeadingTypeEnum } from '../Components/Heading/enums/heading-type.enum';
import HitsCards from '../Components/HitsCards/HitsCards';
import Text from '../Components/Text/Text';
import { TextHtmlTypeEnum } from '../Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Components/Text/enums/text-type.enum';
import { usePlayer } from '../Hooks/usePlayer/usePlayer';
import { AlbumInterfaces } from '../Interfaces/album.interfaces';
import { ArtistInterface } from '../Interfaces/artist.interface';
import { MusicInterface } from '../Interfaces/music.interface';
import styles from './page.module.scss';
import AddToPlaylistButton from './playlist/components/AddToPlaylistButton/AddToPlaylistButton';

export default function MainPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);
  const { data: artists } = useSWR<ArtistInterface[]>(`/artists`, fetcher);

  const { playMusic } = usePlayer();

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.mobileHeading}>
            <div className={styles.mobileText}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.PrimaryTextLarge}
              >
                Let’s start a new adventure
                <span className={styles.colored}> with you</span>
              </Text>
            </div>
            <ModeSwitcher />
          </div>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Albums</Heading>
            <div className={styles.more}>
              <Link href={'/albums'}>See all</Link>
            </div>
          </div>
          <div className={styles.albums}>
            {albums && (
              <AlbumCards
                items={albums.slice(0, 4).map((album) => {
                  return {
                    title: album.name,
                    imgUrl: album.history?.location,
                    artists: album.artists,
                    dropDownItems: [
                      {
                        title: (
                          <AddToPlaylistButton
                            musicId={album.musics.map((music) => music.id)}
                          />
                        ),
                      },
                    ],
                  };
                })}
              />
            )}
          </div>

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <div className={styles.more}>
              <Link href={'/musics'}>See all</Link>
            </div>
          </div>

          {musics && (
            <HitsCards
              items={musics.slice(0, 9).map((hit, index) => {
                return {
                  backgroundImage: hit.album?.history?.location,
                  album: hit.album,
                  name: hit.name,
                  src: hit.history?.location,
                  id: hit.id,
                  onClick: (): void => {
                    playMusic(hit, musics, index);
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
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>
              This Weeks Popular Artists
            </Heading>
            <div className={styles.test}>
              <Link className={styles.more} href={'/artists'}>
                See all
              </Link>
            </div>
          </div>
          <div className={styles.albums}>
            {artists &&
              artists?.slice(0, 4).map((artist) => {
                return (
                  <Link key={artist.id} href={`/artist/${artist.id}`}>
                    <div>
                      <AlbumCard
                        key={artist.id}
                        dropDownItems={[]}
                        imgUrl={artist.history?.location}
                        artists={artists}
                        title={''}
                        artistName={`${artist.firstName} ${artist.lastName}`}
                      />
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
            <div className={styles.more}>
              <Link href={'/artists'}>See all</Link>
            </div>
          </div>
          <div className={styles.albums}>
            {artists &&
              artists?.slice(0, 4).map((artist) => {
                return (
                  <Link key={artist.id} href={`/artist/${artist.id}`}>
                    <div>
                      <AlbumCard
                        key={artist.id}
                        dropDownItems={[]}
                        imgUrl={artist.history?.location}
                        artists={artists}
                        title={''}
                        artistName={`${artist.firstName} ${artist.lastName}`}
                      />
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Charts</Heading>
            <div className={styles.more}>
              <Link href={'/artists'}>See all</Link>
            </div>
          </div>
          <div className={styles.albums}>
            {albums && (
              <AlbumCards
                items={albums.slice(0, 4).map((album) => {
                  return {
                    title: album.name,
                    imgUrl: album.history?.location,
                    artists: album.artists,
                    dropDownItems: [
                      {
                        title: (
                          <AddToPlaylistButton
                            musicId={album.musics.map((music) => music.id)}
                          />
                        ),
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
}
