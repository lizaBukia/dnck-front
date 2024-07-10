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
    <div
      className={`${styles.albumCard} ${props.darkMode ? styles.dark : styles.albumCardLight}`}
    >
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
            htmlType={TextHtmlTypeEnum.Span}
            type={TextTypeEnum.PrimaryTextLarge}
            color={{
              lightColor: '#171C26',
              darkColor: '#F2F2F2',
            }}
          >
            {props.artistName}
          </Text>
          <div>
            <Dropdown
              icon={<Icon name={IconNameEnum.Dot} width={24} height={24} />}
              darkMode={false}
              items={props.dropDownItems}
              position={DropDownPositionEnum.Left}
            />
          </div>
        </div>
        <Text
          htmlType={TextHtmlTypeEnum.Span}
          type={TextTypeEnum.SecondaryTextMedium}
          className={styles.albumName}
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