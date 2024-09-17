'use client'

import { Heading, Link } from 'lucide-react';
import useSWR from 'swr';
import { fetcher } from '../Api/fetcher';
import AlbumCards from '../Components/AlbumCards/AlbumCards';
import ArtistCards from '../Components/ArtistCards/ArtistCards';
import ArtistCardsItems from '../Components/ArtistCardsItems/ArtistCardsItems';
import ModeSwitcher from '../Components/Header/ModeSwitcher/ModeSwitcher';
import { HeadingTypeEnum } from '../Components/Heading/enums/heading-type.enum';
import HitsCards from '../Components/HitsCards/HitsCards';
import Player from '../Components/Player/Player';
import { TextHtmlTypeEnum } from '../Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Components/Text/enums/text-type.enum';
import { AlbumInterface } from '../Interfaces/album.interface';
import { MusicInterface } from '../Interfaces/music.interface';
import styles from './page.module.scss';

export default function MainPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterface[]>('/albums', fetcher);
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);  

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.mobileHeading}>
            <div className={styles.mobileText}>
              
                Let’s start new adventure
                <span className={styles.colored}> with you</span>
            </div>
            <ModeSwitcher />
          </div>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Albums</Heading>
            <div className={styles.more}>
              <Link href={'/albums'}>See all</Link>
            </div>
          </div>
          {Array.isArray(albums) && (
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
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <div className={styles.more}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>
          {Array.isArray(musics) && (
            <HitsCards
              items={musics.map((hit) => ({
                backgroundImage: '/image75.png',
                album: hit.album,
                src: hit.src,
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
          {Array.isArray(albums) && (
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

          {Array.isArray(albums) && (
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
          <ArtistCards items={ArtistCardsItems} />
        </div>
        <div className={`${styles.player} ${styles.darkPlayer}`}>
          <Player />
        </div>
      </div>
    </div>
  );
}
