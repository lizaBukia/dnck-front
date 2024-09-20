import Image from 'next/image';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import styles from './SingleArtistCard.module.scss';
import { SingleArtistCardPropsInterface } from './interfaces/single-artist-card-props.interface';
import { SingleArtistCardType } from './types/single-artist-card.type';

const SingleArtistCard: SingleArtistCardType = (
  props: SingleArtistCardPropsInterface,
) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconsMobile}>
        <div className={styles.iconWrapper}>
          <Icon name={IconNameEnum.ArrowMobile} width={34} height={34} />
        </div>
        <div className={styles.iconWrapper}>
          <Icon name={IconNameEnum.Save} width={24} height={24} />
        </div>
      </div>
      <div className={styles.cardImage}>
        <div>
          <Image
            className={styles.image}
            src={props.imageSrc}
            alt="image"
            width={227}
            height={227}
          />
        </div>
        <div className={styles.headingWrapper}>
          <h1 className={styles.artistName}>{props.artistName}</h1>
          <span className={styles.albums}>
            {props.albums.map((album, index) => (
              <span key={index}>{album.name}</span>
            ))}
          </span>
          <PlayButton
            icon={IconNameEnum.Play}
            onClick={() => {}}
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};
export default SingleArtistCard;
