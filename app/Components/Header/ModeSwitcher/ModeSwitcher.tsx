'use client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../../Icon/Icon';
import styles from './ModeSwitcher.module.scss';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';
import { isDarkState } from '@/app/States/States';

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

  useEffect(() => {
    const body: HTMLElement = document.getElementsByTagName('body')[0];
    if (dark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className={dark ? styles.darkContainer : styles.lightContainer}>
      <div onClick={onClick} className={`${styles.modes} ${styles.darkModes}`}>
        <Icon
          name={dark ? IconNameEnum.Sun : IconNameEnum.Moon}
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default ModeSwitcher;
