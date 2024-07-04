'use client';

// import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './Mode.module.scss';
import { isDarkState } from '@/app/States/States';

const Mode = (): JSX.Element => {
  const [dark, setDark] = useRecoilState(isDarkState);
  const onClick: () => void = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? styles.lightContainer : styles.darkContainer}>
      <div onClick={onClick} className={styles.modes}>
        <div>
          <Icon
            name={dark ? IconNameEnum.Moon : IconNameEnum.Sun}
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Mode;
