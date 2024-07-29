import { RefObject, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../../States/States';
import Dropdown from '../Dropdown/Dropdown';
import { DropDownPositionEnum } from '../Dropdown/enums/dropdown-position.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButtonMobile from '../PlayButtonMobile/PlayButtonMobile';
import Text from '../Text/Text';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './HitsCard.module.scss';
import { HitsCardItemsInterface } from './interfaces/hits-card-items.interface';
import { HitsCardType } from './type/hits-card.type';

const HitsCard: HitsCardType = (props: HitsCardItemsInterface) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);

  const player: RefObject<HTMLAudioElement> | null =
    useRef<HTMLAudioElement>(null);

  function togglePlay(): void {
    if (player?.current) {
      if (player.current.paused) {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
  }

  return (
    <div className={dark ? styles.darkContainer : styles.container}>
      <div className={styles.content}>
        <div
          className={styles.hitsCardsImage}
          style={{
            backgroundImage: props.backgroundImage,
            backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <audio src="/music.mp4" ref={player}></audio>
          <div className={styles.button}>
            <PlayButtonMobile
              icon={IconNameEnum.Pause}
              onClick={togglePlay}
              isDark={false}
            />
          </div>
        </div>
        <div className={styles.title}>
          <Text
            className={styles.artistName}
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
          >
            {props.artistName}
          </Text>
          <Text
            className={styles.albumName}
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
          >
            {props.albumName}
          </Text>
        </div>
      </div>
      <div className={styles.dropdown}>
        <Dropdown
          icon={<Icon name={IconNameEnum.Dot} width={24} height={24} />}
          position={DropDownPositionEnum.Right}
          items={[
            {
              icon: <Icon name={IconNameEnum.Plus} width={28} height={28} />,
              title: 'Add To Playlist',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HitsCard;
