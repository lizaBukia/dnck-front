'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ApiClient } from '../Api/api';
import AlbumCards from '../Components/AlbumCards/AlbumCards';
import ArtistCards from '../Components/ArtistCards/ArtistCards';
import ArtistCardsItems from '../Components/ArtistCardsItems/ArtistCardsItems';
import ModeSwitcher from '../Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '../Components/Heading/Heading';
import { HeadingTypeEnum } from '../Components/Heading/enums/heading-type.enum';
import HitsCards from '../Components/HitsCards/HitsCards';
import Player from '../Components/Player/Player';
import Text from '../Components/Text/Text';
import { TextHtmlTypeEnum } from '../Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Components/Text/enums/text-type.enum';
import { AlbumInterface } from '../interfaces/album.interface';
import { HitsInterface } from '../interfaces/hits.interface';
import styles from './page.module.scss';

// eslint-disable-next-line import/export
export function Home(): JSX.Element {
  const [albums, setAlbums] = useState<AlbumInterface[]>([]);
  const [hits, setHits] = useState<HitsInterface[]>([]);

  useEffect(() => {
    ApiClient.get('/albums')
      .then((res) => setAlbums(res.data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  useEffect(() => {
    ApiClient.get('/musics')
      .then((res) => setHits(res.data))
      .catch((error) => console.error('Error fetching hits:', error));
  }, []);
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
          <AlbumCards
            items={albums.map((album) => ({
              title: 'niko',
              imgUrl: album.imgUrl,
              artistName: 'niko',
              dropDownItems: [],
            }))}
          />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <div className={styles.more}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>
          <HitsCards
            items={hits.map((hit) => ({
              backgroundImage: hit.imgUrl,
              albumName: 'niko',
              artistName: 'niko',
              src: '/music.mp3',
              dropDownItems: hit.dropDownItems,
            }))}
          />

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
          <AlbumCards
            items={albums.map((album) => ({
              title: 'niko',
              imgUrl: album.imgUrl,
              artistName: 'niko',
              dropDownItems: [],
            }))}
          />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
            <div className={styles.more}>
              <Link href={'/topArtist'}>See all</Link>
            </div>
          </div>

          <AlbumCards
            items={albums.map((album) => ({
              title: 'niko',
              imgUrl: album.imgUrl,
              artistName: 'niko',
              dropDownItems: [],
            }))}
          />

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Charts</Heading>
            <div className={styles.more}>
              <Link href={'/topAlbums'}>See all</Link>
            </div>
          </div>
          <ArtistCards items={ArtistCardsItems} />
        </div>
        <div className={`${styles.player} ${styles.darkPlayer}`}>
          <Player />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line import/export
export default Home;
