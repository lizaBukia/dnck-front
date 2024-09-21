'use client';
import Link from 'next/link';
import useSWR from 'swr';
import styles from '../page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCards from '@/app/Components/AlbumCards/AlbumCards';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Player from '@/app/Components/Player/Player';
import { AlbumInterface } from '@/app/Interfaces/album.interface';

export default function AlbumPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterface[]>('/albums', fetcher);

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.mobileHeading}>
            <div className={styles.mobileText}>
              <div className={styles.heading}>
                <Heading type={HeadingTypeEnum.H5}>Albums</Heading>
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
              <div className={`${styles.player} ${styles.darkPlayer}`}>
                <Player />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
