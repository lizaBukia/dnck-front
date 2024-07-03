'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './Mode.module.scss';
import { isDarkState } from '@/app/States/States';

const Mode = (): JSX.Element => {
  const [icon, setIcon] = useState(IconNameEnum.Sun);
  const [dark, setDark] = useRecoilState(isDarkState);
  const onClick: () => void = () => {
    const newIcon: IconNameEnum =
      icon === IconNameEnum.Sun ? IconNameEnum.Moon : IconNameEnum.Sun;
    setIcon(newIcon);
    setDark(!dark);
  };

  return (
    <div className={dark ? styles.lightContainer : styles.darkContainer}>
      <div onClick={onClick} className={styles.modes}>
        <Icon name={icon} width={24} height={24} />
      </div>
    </div>
  );
};

export default Mode;
