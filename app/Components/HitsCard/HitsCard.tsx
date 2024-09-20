import { useRecoilState } from 'recoil';
import Dropdown from '../Dropdown/Dropdown';
import { DropDownPositionEnum } from '../Dropdown/enums/dropdown-position.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import PlayButton from '../PlayButton/PlayButton';
import Text from '../Text/Text';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './HitsCard.module.scss';
import { HitsCardItemsInterface } from './interfaces/hits-card-items.interface';
import { HitsCardType } from './type/hits-card.type';
import { usePlayer } from '@/app/Hooks/usePlayer/usePlayer';
import { currentMusicState } from '@/app/States/States';

const HitsCard: HitsCardType = (props: HitsCardItemsInterface) => {
  const { togglePlay, playMusic } = usePlayer();
  const [music] = useRecoilState(currentMusicState);
  const artistName: string[] = [];

  for (const artist of props.album.artists) {
    artistName.push(`${artist.firstName} ${artist.lastName}`);
  }

  const onClick = (): void => {
    playMusic({
      name: props.name,
      imgLink: props.album.history.location,
      src: props.src,
      artistName: artistName.join(', '),
      id: props.id,
    });
    togglePlay();
  };

  console.log(music.currentMusicId === props.id);

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
          <div className={styles.button}>
            <PlayButton
              icon={
                music.currentMusicId === props.id && music.isPlaying
                  ? IconNameEnum.Pause
                  : IconNameEnum.Play
              }
              onClick={onClick}
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className={styles.title}>
          <Text
            className={styles.artistName}
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.SecondaryTextMedium}
          >
            {artistName.join(', ')}
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
      <div className={styles.dropdown}>
        <Dropdown
          icon={<Icon name={IconNameEnum.Dot} width={24} height={24} />}
          position={DropDownPositionEnum.Up}
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
