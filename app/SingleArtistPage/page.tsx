'use client';
import Link from 'next/link';
import AlbumCards from '../Components/AlbumCards/AlbumCards';
import AlbumItems from '../Components/AlbumItems/AlbumItems';
import Heading from '../Components/Heading/Heading';
import { HeadingTypeEnum } from '../Components/Heading/enums/heading-type.enum';
import { HitsItems } from '../Components/HitsCard/HitsItems/HitsItems';
import HitsCards from '../Components/HitsCards/HitsCards';
import Player from '../Components/Player/Player';
import SingleArtistCard from '../Components/SingleArtistCard/SingleArtistCard';
import { SingleArtistPagePropsInterface } from './interfaces/single-artist-page-props.interface';
import styles from './page.module.scss';
import { SingleArtistPageType } from './type/single-artist-page.type';

const SingleArtistPage: SingleArtistPageType = (
  props: SingleArtistPagePropsInterface,
) => {
  return (
    <div className={`${styles.mainContainer} ${styles.mainLightContainer}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.singleArtistCard}>
            <SingleArtistCard artistName={'Drake'} albums={'23 Albums'} />
            <div className={styles.heading}>
              <Heading
                type={HeadingTypeEnum.H5}
              >{`${props.artistName}'s Most Popular Musics`}</Heading>
              <div className={styles.seeAll}>
                <Link href={'/topHits'}>See all</Link>
              </div>
            </div>
            <HitsCards items={HitsItems} />
          </div>
          <div className={styles.heading}>
            <Heading
              type={HeadingTypeEnum.H5}
            >{`${props.artistName}'s Most Popular Albums`}</Heading>
            <div className={styles.seeAll}>
              <Link href={'/topHits'}>See all</Link>
            </div>
          </div>

          <AlbumCards items={AlbumItems} />
        </div>
        <div
          className={`${styles.player} ${styles.darkPlayer} ${styles.downPlayer}`}
        >
          <Player
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleArtistPage;
