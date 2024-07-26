'use client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AlbumCards from './Components/AlbumCards/AlbumCards';
import AlbumItems from './Components/AlbumItems/AlbumItems';
import ContentHeading from './Components/ContentHeading/ContentHeading';
import { HitsItems } from './Components/HitsCard/HitsItems/HitsItems';
import HitsCards from './Components/HitsCards/HitsCards';
import Player from './Components/Player/Player';
import { isDarkState } from './States/States';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);

  return (
    <div className={styles.container}>
      <div className={styles.mainPage}>
        <div
          className={`${styles.content} ${dark ? styles.darkContent : styles.lightContent}`}
        >
          <ContentHeading>Top Albums</ContentHeading>
          <AlbumCards items={AlbumItems} />

          <ContentHeading>Top Hits</ContentHeading>

          <HitsCards items={HitsItems} />

          <ContentHeading>This Week Popular Artists</ContentHeading>

          <AlbumCards items={AlbumItems} />

          <ContentHeading>Top Artists</ContentHeading>

          <AlbumCards items={AlbumItems} />

          <ContentHeading>Top Charts</ContentHeading>

          <AlbumCards items={AlbumItems} />
        </div>
        <div
          className={`${styles.player} ${dark ? styles.darkPlayer : styles.lightPlayer}`}
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
}
