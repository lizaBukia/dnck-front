import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './DropDownButton.module.scss';
import { DropdownButtonPropsInterface } from '@/app/Components/Dropdown/DropdownButton/interfaces/dropdown-button-props.interface';
import { DropdownButtonType } from '@/app/Components/Dropdown/DropdownButton/types/dropdown-button.type';
import Text from '@/app/Components/Text/Text';
import { TextHtmlTypeEnum } from '@/app/Components/Text/enums/text-html-type.enum';
import { TextTypeEnum } from '@/app/Components/Text/enums/text-type.enum';

const DropdownButton: DropdownButtonType = (
  props: DropdownButtonPropsInterface,
) => {
  return (
    <div
      className={`${styles.button} ${props.darkMode ? styles.dark : styles.light}`}
    >
      <Icon name={IconNameEnum.Plus} width={28} height={28} />
      <Text
        htmlType={TextHtmlTypeEnum.Span}
        type={TextTypeEnum.SecondaryTextMediumBold}
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
