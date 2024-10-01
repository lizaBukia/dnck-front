'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { SearchInterface } from './interfaces/search.interface';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Button from '@/app/Components/Button/Button';
import { ButtonTypeEnum } from '@/app/Components/Button/enums/button-type.enum';
import SearchInput from '@/app/Components/Header/SearchInput/SearchInput';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import SearchArtistCard from '@/app/Components/SearchArtistCard/SearchArtistCard';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import { MusicInterface } from '@/app/Interfaces/music.interface';

export default function SearchPage(): JSX.Element {
  const searchValue: string | null = useSearchParams().get('search');
  const { playMusic } = usePlayer();
  const { data: searchResult } = useSWR<SearchInterface>(
    `/search?search=${searchValue}`,
    fetcher,
  );
  const [search, setSearch] = useState('');

  const router: AppRouterInstance = useRouter();
  const onSearch = (): void => {
    router.push(`/search?search=${search}`);
  };

  const paramSearch: string | null = useSearchParams().get('search');

  useEffect(() => {
    if (paramSearch) {
      setSearch(paramSearch);
    }
  }, [paramSearch]);
  const artists: ArtistInterface[] | undefined = searchResult?.artists;
  const albums: AlbumInterfaces[] | undefined = searchResult?.albums;
  const musics: MusicInterface[] | undefined = searchResult?.musics;
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.searchButton}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <Button type={ButtonTypeEnum.Primary} onClick={onSearch}>
          Search
        </Button>
      </div>
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
                <Link key={artist.id} href={`/artist/${artist.id}`}>
                  <div key={artist.id}>
                    <SearchArtistCard
                      key={artist.id}
                      id={artist.id}
                      name={`${artist.firstName} ${artist.lastName}`}
                      biography={artist.biography}
                      createdAt={artist.createdAt}
                      src={artist.history?.location}
                    />
                  </div>
                </Link>
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
          {albums &&
            albums.map((album, index) => {
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
              items={musics.map((hit, idx) => {
                return {
                  backgroundImage: hit.album?.history?.location,
                  album: hit.album,
                  name: hit.name,
                  onClick: (): void => {
                    playMusic(hit, musics, idx);
                  },
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
