'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './ModeSwitcher.module.scss';
import { isDarkState } from '@/app/States/states';

const ModeSwitcher = (): JSX.Element => {
  const [dark, setDark] = useRecoilState(isDarkState);

  const onClick: () => void = () => {
    localStorage.setItem('isDark', String(!dark));
    setDark(!dark);
  };

  useEffect(() => {
    const item: boolean = localStorage.getItem('isDark') === 'true';
    setDark(item);
  }, [setDark]);

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
