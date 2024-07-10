'use client';

import { useRecoilState } from 'recoil';
import { isDarkState } from '../../../States/States';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './ModeSwitcher.module.scss';

const ModeSwitcher = (): JSX.Element => {
  const [dark, setDark] = useRecoilState(isDarkState);

  const onClick: () => void = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? styles.darkContainer : styles.lightContainer}>
      <div onClick={onClick} className={styles.modes}>
        <div>
          <Icon
            name={dark ? IconNameEnum.Sun : IconNameEnum.Moon}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ModeSwitcher;
