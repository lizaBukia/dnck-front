import { useRecoilState } from 'recoil';
import Dropdown from '../Dropdown/Dropdown';
import { DropDownPositionEnum } from '../Dropdown/enums/dropdown-position.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import Text from '../Text/Text';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './DownHitsCard.module.scss';
import { DownHitsCardItemsInterface } from './interfaces/down-hits-card-items-props.interface';
import { DownHitsCardType } from './types/down-hits-card.type';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState } from '@/app/States/States';

const DownHitsCard: DownHitsCardType = (props: DownHitsCardItemsInterface) => {
  const { togglePlay } = usePlayer();
  const [music] = useRecoilState(currentMusicState);
  const artistName: string[] = [];

  for (const artist of props.album?.artists ?? []) {
    artistName.push(`${artist.firstName} ${artist.lastName}`);
  }

  const onClick = (): void => {
    props.onClick?.(), togglePlay();
  };

  return (
    <div className={`${styles.darkContainer} ${styles.container}`}>
      <div className={styles.content}>
        <div
          className={styles.hitsCardsImage}
          style={{
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div>
            <PlayButton
              icon={
                music.currentMusicId === props.id && music.isPlaying
                  ? IconNameEnum.Pause
                  : IconNameEnum.Play
              }
              onClick={onClick}
              width={32}
              height={32}
              music={props.id}
            />
          </div>
        </div>
        <div className={styles.title}>
          <Text
            className={styles.artistName}
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
          >
            {props.name}
          </Text>
          <Text
            className={styles.albumName}
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
          >
            {artistName.join(', ')}
          </Text>
        </div>
      </div>
      {!!props.dropDownItems?.length && (
        <div className={styles.dropdown}>
          <Dropdown
            icon={<Icon name={IconNameEnum.Dot} width={24} height={24} />}
            position={DropDownPositionEnum.Up}
            items={props.dropDownItems ?? []}
          />
        </div>
      )}
    </div>
  );
};

export default DownHitsCard;
