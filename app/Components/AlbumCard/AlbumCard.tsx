import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';
import { DropDownPositionEnum } from '../Dropdown/enums/dropdown-position.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './AlbumCard.module.scss';
import { AlbumCardPropsInterface } from './interfaces/album-card-props.interface';
import { AlbumCardType } from './types/albumcard.type';
import Text from '@/app/Components/Text/Text';
const AlbumCard: AlbumCardType = (props: AlbumCardPropsInterface) => {
  return (
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
          <div className={styles.dropdown}>
            <Dropdown
              icon={<Icon name={IconNameEnum.Dot} width={24} height={24} />}
              position={DropDownPositionEnum.Right}
              items={[
                {
                  icon: (
                    <Icon name={IconNameEnum.Plus} width={28} height={28} />
                  ),
                  title: 'Add To Playlist',
                },
              ]}
            />
          </div>
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
          {props.albumName}
        </Text>
      </div>
    </div>
  );
};

export default AlbumCard;
