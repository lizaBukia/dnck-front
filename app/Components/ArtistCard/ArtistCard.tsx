import Image from 'next/image';
import Link from 'next/link';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './ArtistCard.module.scss';
import { ArtistCardPropsInterface } from './interfaces/artist-card-props.interface';
import { ArtistCardType } from './types/artist-card.type';
import Text from '@/app/Components/Text/Text';
const ArtistCard: ArtistCardType = (props: ArtistCardPropsInterface) => {
  return (
    <Link href={props.href}>
      <div className={`${styles.albumCard} ${styles.dark}`}>
        <div className={styles.albumCardImage}>
          <Image
            src={props.image}
            alt={props.albumName}
            width={200}
            height={203}
          />
        </div>
        <div className={styles.namesContainer}>
          <div className={styles.artistName}>
            <Text
              className={styles.artistNameFont}
              htmlType={TextHtmlTypeEnum.Span}
              type={TextTypeEnum.PrimaryTextLarge}
            >
              {props.artistName}
            </Text>
          </div>
          <Text
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
            className={`${styles.albumName} ${styles.albumNameFont}`}
            color={{
              lightColor: '#B1B1B1',
              darkColor: '#B1B1B1',
            }}
          >
            {props.name}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
