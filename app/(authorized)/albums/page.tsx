'use client';
import Link from 'next/link';
import useSWR from 'swr';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

export default function AlbumPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.contentWrapper} ${styles.lightContent}`}>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Albums</Heading>
          </div>
          <div className={styles.content}>
            <div className={styles.wrapper}>
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
        </div>
      </div>
    </div>
  );
}
