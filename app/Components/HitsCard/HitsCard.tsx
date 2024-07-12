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

const HitsCard: HitsCardType = (props: HitsCardItemsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.hitsCardsImage}
          style={{
            backgroundImage: props.backgroundImage,
            backgroundRepeat: `no-repeat`,
            height: `64px`,
            width: '64px',
            backgroundSize: 'cover',
          }}
        >
          <div className={styles.button}>
            <PlayButton
              icon={IconNameEnum.Play}
              width={24}
              height={24}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
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
          darkMode={false}
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
