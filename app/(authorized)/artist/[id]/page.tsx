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
import { ArtistInterface } from '@/app/Interfaces/artist.interface';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  const { data: artists } = useSWR<ArtistInterface>(
    `/artists/${props.params.id}`,
    fetcher,
  );

  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            {artists && (
              <SingleArtistCard
                artistName={`${(artists.firstName, artists.lastName)}`}
                albums={'hdbshdg'}
              />
            )}
            <div className={styles.heading}>
              <Heading
                type={HeadingTypeEnum.H5}
              >{`${props.params}'s Most Popular Musics`}</Heading>
              <div className={styles.seeAll}>
                <Link href={'/topHits'}>See all</Link>
              </div>
            </div>
            {/* <HitsCards items={HitsItems} /> */}
          </div>
          <div className={styles.heading}>
            <Heading
              type={HeadingTypeEnum.H5}
            >{`${props.params}'s Most Popular Albums`}</Heading>
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
