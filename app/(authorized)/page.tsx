'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '../Api/fetcher';
import AlbumCards from '../Components/AlbumCards/AlbumCards';
import ModeSwitcher from '../Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '../Components/Heading/Heading';
import { HeadingTypeEnum } from '../Components/Heading/enums/heading-type.enum';
import HitsCards from '../Components/HitsCards/HitsCards';
import Text from '../Components/Text/Text';
import { TextHtmlTypeEnum } from '../Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Components/Text/enums/text-type.enum';
import { AlbumInterfaces } from '../Interfaces/album.interfaces';
import { MusicInterface } from '../Interfaces/music.interface';
import styles from './page.module.scss';

export default function MainPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);

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
                Let’s start new adventure
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
          {albums && (
            <AlbumCards
              items={albums?.map?.((album) => {
                return {
                  title: album.name,
                  imgUrl: album.imgUrl,
                  artists: album.artists,
                  dropDownItems: [],
                };
              })}
            />
          )}
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <div className={styles.more}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>
          {musics && (
            <HitsCards
              items={musics.map((hit) => ({
                backgroundImage: hit.album.imgUrl,
                album: hit.album,
                name: hit.name,
                src: hit.src,
                id: hit.id,
                dropDownItems: [],
              }))}
            />
          )}

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>
              This Week Popular Artists
            </Heading>
            <div className={styles.test}>
              <Link className={styles.more} href={'/topArtist'}>
                See all
              </Link>
            </div>
          </div>
          {albums && (
            <AlbumCards
              items={albums.map((album) => ({
                title: album.name,
                imgUrl: album.imgUrl,
                artists: album.artists,
                dropDownItems: [],
              }))}
            />
          )}
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
            <div className={styles.more}>
              <Link href={'/topArtist'}>See all</Link>
            </div>
          </div>

          {albums && (
            <AlbumCards
              items={albums.map((album) => ({
                title: album.name,
                imgUrl: album.imgUrl,
                artists: album.artists,
                dropDownItems: [],
              }))}
            />
          )}

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Charts</Heading>
            <div className={styles.more}>
              <Link href={'/topAlbums'}>See all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
