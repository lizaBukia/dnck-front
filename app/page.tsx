'use client';
import Link from 'next/link';
import AlbumCards from './Components/AlbumCards/AlbumCards';
import AlbumItems from './Components/AlbumItems/AlbumItems';
import ArtistCards from './Components/ArtistCards/ArtistCards';
import ArtistItems from './Components/ArtistItems/ArtistItems';
import Heading from './Components/Heading/Heading';
import { HeadingTypeEnum } from './Components/Heading/enums/heading-type.enum';
import { HitsItems } from './Components/HitsCard/HitsItems/HitsItems';
import HitsCards from './Components/HitsCards/HitsCards';
import Player from './Components/Player/Player';
import Text from './Components/Text/Text';
import { TextHtmlTypeEnum } from './Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from './Components/Text/enums/text-type.enum';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.content} ${styles.lightContent}`}>
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Albums</Heading>
            <div className={styles.more}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.SecondaryTextMedium}
              >
                See all
              </Text>
            </div>
          </div>
          <AlbumCards items={AlbumItems} />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Hits</Heading>
            <div className={styles.more}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.SecondaryTextMedium}
              >
                See all
              </Text>
            </div>
          </div>
          <HitsCards items={HitsItems} />

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>
              This Week Popular Artists
            </Heading>
            <div className={styles.test}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.SecondaryTextMedium}
                className={styles.more}
              >
                See all
              </Text>
            </div>
          </div>
          <ArtistCards items={ArtistItems} />
          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Artists</Heading>
            <div className={styles.more}>
              <Text
                htmlType={TextHtmlTypeEnum.Span}
                type={TextTypeEnum.SecondaryTextMedium}
              >
                See all
              </Text>
            </div>
          </div>

          <AlbumCards items={AlbumItems} />

          <div className={styles.heading}>
            <Heading type={HeadingTypeEnum.H5}>Top Charts</Heading>
            <Link href={'./home'}>
              <div className={styles.more}>
                <Text
                  htmlType={TextHtmlTypeEnum.Span}
                  type={TextTypeEnum.SecondaryTextMedium}
                >
                  See all
                </Text>
              </div>
            </Link>
          </div>
          <AlbumCards items={AlbumItems} />
        </div>
        <div className={`${styles.player} ${styles.darkPlayer}`}>
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
