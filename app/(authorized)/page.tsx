'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { fetcher } from '../Api/fetcher';
import AlbumCard from '../Components/AlbumCard/AlbumCard';
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
  const date: Date = new Date();
  const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
  const year: number = lastMonth.getFullYear();
  const month: string = (lastMonth.getMonth() + 1).toString().padStart(2, '0');
  const day: number = lastMonth.getDate();
  const formattedDate: string = `${year}-${month}-${day}`;
  const { data: albums } = useSWR<AlbumInterfaces[]>(
    `/albums?topDate=${formattedDate}`,
    fetcher,
  );
  const { data: musics } = useSWR<MusicInterface[]>(
    `/musics?topDate=${formattedDate}`,
    fetcher,
  );
  const { data: artists } = useSWR<ArtistInterface[]>(
    `/artists?topDate=${formattedDate}`,
    fetcher,
  );

  const { playMusic } = usePlayer();
  const router: AppRouterInstance = useRouter();

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
            {albums &&
              albums.slice(0, 4).map((album, index) => {
                return (
                  <AlbumCard
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.stopPropagation();
                      router.push(`/albums/${album.id}`);
                    }}
                    key={index}
                    darkMode={false}
                    imgUrl={album.history?.location}
                    artists={album.artists}
                    title={album.title}
                    dropDownItems={[
                      {
                        title: (
                          <AddToPlaylistButton
                            musicId={album.musics.map((music) => music.id)}
                            album={true}
                          />
                        ),
                      },
                    ]}
                  />
                );
              })}
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
                        imgUrl={artist.history?.location}
                        artists={artists}
                        title={''}
                        artistName={`${artist.firstName} ${artist.lastName}`}
                        dropDownItems={[]}
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
            {albums &&
              albums.slice(0, 4).map((album, index) => {
                return (
                  <Link href={`albums/${album.id}`} key={album.id}>
                    <AlbumCard
                      key={index}
                      darkMode={false}
                      imgUrl={album.history?.location}
                      artists={album.artists}
                      title={album.title}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
