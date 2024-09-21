import { TextHtmlTypeEnum } from '../../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../../Text/enums/text-type.enum';
import styles from './DropdownButton.module.scss';
import { DropdownButtonPropsInterface } from './interfaces/dropdown-button-props.interface';
import { DropdownButtonType } from './types/dropdown-button.type';
import Text from '@/app/Components/Text/Text';

const DropdownButton: DropdownButtonType = (
  props: DropdownButtonPropsInterface,
) => {
  return (
    <div className={`${styles.button} ${styles.dark} `} onClick={props.onClick}>
      {props.icon}
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
