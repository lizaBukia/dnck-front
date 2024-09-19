import Image from 'next/image';
import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import styles from './MusicPlayerResponsive.module.scss';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState, isDarkState } from '@/app/States/States';

// eslint-disable-next-line react/display-name
const MusicPlayerResponsive: FC = () => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;
  const [currentMusic] = useRecoilState(currentMusicState);
  const { playerRef: audioRef, togglePlay } = usePlayer();

  return (
    <div className={`${className} ${styles.playerWrapper}`}>
      <div className={styles.textWrapper}>
        <div>
          <Image
            className={styles.playerImage}
            src={currentMusic.imgLink}
            width={56}
            height={63}
            alt="image"
          />
        </div>
        <div className={`${className} ${styles.playerName}`}>
          <h1 className={styles.songName}>{currentMusic.name}</h1>
          <span className={styles.artistName}>{currentMusic.artistName}</span>
          <audio ref={audioRef}></audio>
        </div>
      </div>
      <div className={styles.musicPlayer}>
        <Icon
          name={isDark ? IconNameEnum.BackwardDark : IconNameEnum.BackwardLight}
          width={16}
          height={16}
        />
        <PlayButtonMobile
          icon={IconNameEnum.Pause}
          onClick={togglePlay}
          width={32}
          height={32}
          isDark={false}
        />
        <Icon
          name={isDark ? IconNameEnum.ForwardDark : IconNameEnum.ForwardLight}
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
export default MusicPlayerResponsive;
