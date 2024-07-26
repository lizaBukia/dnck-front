'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import AlbumCards from './Components/AlbumCards/AlbumCards';
import AlbumItems from './Components/AlbumItems/AlbumItems';
import Heading from './Components/Heading/Heading';
import { HeadingTypeEnum } from './Components/Heading/enums/heading-type.enum';
import { HitsItems } from './Components/HitsCard/HitsItems/HitsItems';
import HitsCards from './Components/HitsCards/HitsCards';
import Player from './Components/Player/Player';
import Text from './Components/Text/Text';
import { TextHtmlTypeEnum } from './Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from './Components/Text/enums/text-type.enum';
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
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Albums</Heading>
            <Text
              htmlType={TextHtmlTypeEnum.Span}
              type={TextTypeEnum.SecondaryTextMedium}
            >
              See all
            </Text>
          </div>
          <AlbumCards items={AlbumItems} />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <Text
              htmlType={TextHtmlTypeEnum.Span}
              type={TextTypeEnum.SecondaryTextMedium}
            >
              See all
            </Text>
          </div>

          <HitsCards items={HitsItems} />

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>
              This Week Popular Artists
            </Heading>
            <Text
              htmlType={TextHtmlTypeEnum.Span}
              type={TextTypeEnum.SecondaryTextMedium}
            >
              See all
            </Text>
          </div>
          <AlbumCards items={AlbumItems} />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
            <Text
              htmlType={TextHtmlTypeEnum.Span}
              type={TextTypeEnum.SecondaryTextMedium}
            >
              See all
            </Text>
          </div>

          <AlbumCards items={AlbumItems} />

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Charts</Heading>
            <Link href={'./home'}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.SecondaryTextMedium}
              >
                See all
              </Text>
            </Link>
          </div>
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
