import Image from 'next/image';
import styles from './SearchArtistCard.module.scss';
import { SearchArtistCardPropsInterface } from './interfaces/search-artist-card.interface';
import { SearchArtistCardType } from './types/search-artist-card.type';

const SearchArtistCard: SearchArtistCardType = (
  props: SearchArtistCardPropsInterface,
) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <div>
          <Image
            className={styles.image}
            src={props.src}
            alt={'image'}
            width={227}
            height={227}
          />
        </div>
        <div className={styles.headingWrapper}>
          <h1 className={styles.artistName}>{props.name}</h1>
        </div>
      </div>
    </div>
  );
};
export default SearchArtistCard;
