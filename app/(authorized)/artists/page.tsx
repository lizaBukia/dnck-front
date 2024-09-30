'use client';
import Link from 'next/link';
import useSWR from 'swr';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';

const Artists = (): JSX.Element => {
  const { data: artists } = useSWR<ArtistInterface[]>(`/artists`, fetcher);

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.contentWrapper} ${styles.lightContent}`}>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
          </div>
          <div className={styles.content}>
            <div className={styles.artistsContainer}>
              {artists &&
                artists?.map((artist) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artists;
