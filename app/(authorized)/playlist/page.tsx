'use client';
import styles from './page.module.scss';
import ModeSwitcher from '@/app/Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Player from '@/app/Components/Player/Player';

export default function AlbumPage(): JSX.Element {
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

          <div className={`${styles.player} ${styles.darkPlayer}`}>
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
}
