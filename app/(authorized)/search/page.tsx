'use client';
import Link from 'next/link';
import useSWR from 'swr';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCards from '@/app/Components/AlbumCards/AlbumCards';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import SearchArtistCard from '@/app/Components/SearchArtistCard/SearchArtistCard';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import { MusicInterface } from '@/app/Interfaces/music.interface';
import { SearchInterface } from './interfaces/search.interface';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchHeaderState } from '@/app/States/States';
import { useSearchParams } from 'next/navigation';

export default function SearchPage(): JSX.Element {
  const searchValue = useSearchParams().get('search');
  const { data: searchResult } = useSWR<SearchInterface>(
    `/search?search=${searchValue}`,
    fetcher,
  );
  const artists = searchResult?.artists;
  const albums = searchResult?.albums;
  const musics = searchResult?.musics;
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.artistsWrapper}>
        {artists?.length ? (
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Artists</Heading>
          </div>
        ) : null}
        <div className={styles.artist}>
          <div className={styles.artistColumn}>
            {artists &&
              artists.map((artist) => (
                <SearchArtistCard
                  key={artist.id}
                  id={artist.id}
                  name={`${artist.firstName} ${artist.lastName}`}
                  biography={artist.biography}
                  createdAt={artist.createdAt}
                />
              ))}
          </div>
        </div>
      </div>
      <div className={styles.albumsWrapper}>
        {albums?.length ? (
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Albums</Heading>
            <div className={styles.more}>
              <Link href={'/albums'}>See all</Link>
            </div>
          </div>
        ) : null}

        <div className={styles.albums}>
          {albums && (
            <AlbumCards
              items={albums.slice(0, 4).map((album) => {
                console.log(album, 'here yawhifuaio');
                return {
                  title: album.name,
                  imgUrl: album.history?.location,
                  artists: album.artists,
                  dropDownItems: [],
                };
              })}
            />
          )}
        </div>
      </div>
      <div className={styles.musicsWrapper}>
        {musics?.length ? (
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Songs</Heading>
            <div className={styles.more}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>
        ) : null}
        <div className={styles.musics}>
          {musics && (
            <HitsCards
              items={musics.slice(0, 9).map((hit) => {
                return {
                  backgroundImage: hit.album.history?.location,
                  album: hit.album,
                  name: hit.name,
                  src: hit.history?.location,
                  id: hit.id,
                  dropDownItems: [],
                };
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
}
