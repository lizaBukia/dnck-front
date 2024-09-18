'use client';
import useSWR from 'swr';
import styles from './page.module.scss';
import { fetcher } from '@/app/Api/fetcher';
import ModeSwitcher from '@/app/Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import HitsCards from '@/app/Components/HitsCards/HitsCards';
import { MusicInterface } from '@/app/Interfaces/music.interface';

export default function AlbumPage(): JSX.Element {
  const { data: musics } = useSWR<MusicInterface[]>('/musics', fetcher);

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
            <Heading type={HeadingTypeEnum.H5}>Playlist</Heading>
          </div>
          <div>
            {musics && (
              <HitsCards
                items={musics.map((hit) => ({
                  backgroundImage: hit.album.imgUrl,
                  album: hit.album,
                  name: hit.name,
                  src: hit.src,
                  id: hit.id,
                  dropDownItems: [],
                }))}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
