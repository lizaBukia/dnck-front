'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Button from '../Button/Button';
import { ButtonIconPositionEnum } from '../Button/enums/button-icon-position.enum';
import { ButtonTypeEnum } from '../Button/enums/button-type.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import { isModeState } from '../States/States';
import styles from './Header.module.scss';
import HeaderNav from './header-navigation/header-navigation';
import Logo from './logo/logo';
import Search from './searchInput/searchInput';
import { HeaderType } from './types/header.type';

const Header: HeaderType = () => {
  const [icon, setIcon] = useState(IconNameEnum.Sun);
  const [mode, setMode] = useRecoilState(isModeState);
  const onClick: () => void = () => {
    const newIcon: IconNameEnum =
      icon === IconNameEnum.Sun ? IconNameEnum.Moon : IconNameEnum.Sun;
    setIcon(newIcon);
    setMode(!mode);
  };

  return (
    <div className={mode ? styles.lightContainer : styles.darkContainer}>
      <div className={styles.content}>
        <Logo />
        <Search />
        <div className={styles.modeAndLog}>
          <div onClick={onClick} className={styles.modes}>
            <Icon name={icon} width={24} height={24} />
          </div>
          <div className={styles.button}>
            <Button
              position={ButtonIconPositionEnum.Right}
              icon={<Icon name={IconNameEnum.Logout} width={24} height={24} />}
              type={ButtonTypeEnum.Primary}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
