import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import { TextHtmlTypeEnum } from '../../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../../Text/enums/text-type.enum';
import styles from './DropDownButton.module.scss';
import { DropdownButtonPropsInterface } from './interfaces/dropdown-button-props.interface';
import { DropdownButtonType } from './types/dropdown-button.type';
import Text from '@/app/Components/Text/Text';

const DropdownButton: DropdownButtonType = (
  props: DropdownButtonPropsInterface,
) => {
  return (
    <div className={`${styles.button} ${styles.dark}`}>
      <Icon name={IconNameEnum.Plus} width={28} height={28} />
      <Text
        htmlType={TextHtmlTypeEnum.Span}
        type={TextTypeEnum.SecondaryTextExtraSmall}
        color={{
          lightColor: '#9d9d9d',
          darkColor: '#9d9d9d',
        }}
      >
        {props.children}
      </Text>
    </div>
  );
};

export default DropdownButton;
