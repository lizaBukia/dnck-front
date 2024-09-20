'use client';
import useSWR from 'swr';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCards from '@/app/Components/AlbumCards/AlbumCards';
import ModeSwitcher from '@/app/Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import { AlbumInterfaces } from '@/app/Interfaces/album.interfaces';

export default function AlbumPage(): JSX.Element {
  const { data: albums } = useSWR<AlbumInterfaces[]>('/albums', fetcher);

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.contentWrapper} ${styles.lightContent}`}>
          <div className={styles.mobileHeading}>
            <div className={styles.mobileText}>
              <span className={styles.primaryTextLarge}>
                Let’s start new adventure
                <span className={styles.colored}> with you</span>
              </span>
            </div>
            <ModeSwitcher />
          </div>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Albums</Heading>
          </div>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              {albums && (
                <AlbumCards
                  items={albums.map?.((album) => {
                    return {
                      title: album.name,
                      imgUrl: album.history.location,
                      artists: album.artists,
                      dropDownItems: [],
                    };
                  })}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
