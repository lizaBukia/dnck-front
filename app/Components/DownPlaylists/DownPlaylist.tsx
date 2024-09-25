import Image from 'next/image';
import styles from './DownPlaylists.module.scss';
import { DownPlaylistPropsInterface } from './interfaces/down-playlist-props.interface';
import { DownPlaylistType } from './types/down-playlist.type';

const DownPlaylist: DownPlaylistType = (props: DownPlaylistPropsInterface) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={`${styles.playlistWrapper} ${styles.darkContainer}`}>
        <div>
          <Image
            className={styles.image}
            src={props.imgUrl}
            alt={'image'}
            width={64}
            height={64}
          />
        </div>
        <div>
          <h5 className={styles.heading}>{props.name}</h5>
        </div>
      </div>
    </div>
  );
};
export default DownPlaylist;
