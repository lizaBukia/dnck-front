import styles from './SingleArtistCard.module.scss';
import { SingleArtistCardPropsInterface } from './interfaces/single-artist-card-props.interface';
import { SingleArtistCardType } from './types/play-button-mobile.type';
import PlayButton from '../PlayButton/PlayButton';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import Icon from '../Icon/Icon';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';

const SingleArtistCard: SingleArtistCardType = (
  props: SingleArtistCardPropsInterface,
) => {
  const { playerRef, togglePlay } = usePlayer();

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
          <img className={styles.image} src="/images/image89.png" alt="image" />
        </div>
        <div className={styles.headingWrapper}>
          <h1 className={styles.artistName}>{props.artistName}</h1>
          <span className={styles.albums}>{props.albums}</span>
          <audio src="/music.mp4" ref={playerRef}></audio>

          <PlayButton
            icon={IconNameEnum.Play}
            onClick={togglePlay}
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};
export default SingleArtistCard;
