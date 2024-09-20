'use client';
import Link from 'next/link';
import useSWR from 'swr';
import AlbumCards from '../../../Components/AlbumCards/AlbumCards';
import AlbumItems from '../../../Components/AlbumItems/AlbumItems';
import Heading from '../../../Components/Heading/Heading';
import { HeadingTypeEnum } from '../../../Components/Heading/enums/heading-type.enum';
import SingleArtistCard from '../../../Components/SingleArtistCard/SingleArtistCard';
import { SingleArtistPagePropsInterface } from '../interfaces/single-artist-page-props.interface';
import styles from '../page.module.scss';
import { SingleArtistPageType } from '../type/single-artist-page.type';
import { fetcher } from '@/app/Api/fetcher';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import { MusicInterface } from '@/app/Interfaces/music.interface';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  const { data: artists } = useSWR<ArtistInterface>(
    `/artists/${props.params.id}`,
    fetcher,
  );
  const { data: musics } = useSWR<MusicInterface[]>('/musics/', fetcher);
  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            {artists && (
              <SingleArtistCard
                artistName={`${artists.firstName} ${artists.lastName}`}
                albums={artists.album}
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
                items={musics?.map?.((hit) => ({
                  backgroundImage: hit.album.history.location,
                  album: hit.album,
                  name: hit.name,
                  src: hit.history.location,
                  id: hit.id,
                  dropDownItems: [],
                }))}
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
          <AlbumCards items={AlbumItems} />
        </div>
      </div>
    </div>
  );
};

export default SingleArtistPage;
