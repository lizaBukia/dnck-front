'use client';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Heading from '@/app/Components/Heading/Heading';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import useSWR from 'swr';
import { ArtistInterface } from '@/app/Interfaces/artist.interface';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Link from 'next/link';

const Artists = (props: { params: { id: number } }): JSX.Element => {
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
                artists?.map((artist, idx) => {
                  return (
                    <Link href={`/artist/${artist.id}`}>
                      <div>
                        <AlbumCard
                          dropDownItems={[]}
                          imgUrl={artist.history.location}
                          artists={[]}
                          title={`${artist.firstName} ${artist.lastName}`}
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
