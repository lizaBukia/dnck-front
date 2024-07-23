import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import { TextHtmlTypeEnum } from '../../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../../Text/enums/text-type.enum';
import styles from './DropDownButton.module.scss';
import { DropdownButtonPropsInterface } from './interfaces/dropdown-button-props.interface';
import { DropdownButtonType } from './types/dropdown-button.type';
import Text from '@/app/Components/Text/Text';
import { isDarkState } from '@/app/States/States';

const DropdownButton: DropdownButtonType = (
  props: DropdownButtonPropsInterface,
) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);
  return (
    <div className={`${styles.button} ${dark ? styles.dark : styles.light}`}>
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
