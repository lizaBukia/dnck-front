'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../../States/States';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import HeaderNavItems from './HeaderNavItems/HeaderNavItems';
import Logo from './Logo/Logo';
import LogoutButton from './Logout-Button/LogoutButton';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import { HeaderType } from './Type/Header.type';

const Header: HeaderType = () => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    localStorage.setItem('isDark', String(dark));

    const isDarkMode: boolean = localStorage.getItem('isDark') === 'true';

    if (isDarkMode !== dark) {
      setDark(isDarkMode);
    }
  }, [dark, setDark]);

  return (
    <div className={dark ? styles.darkContainer : styles.lightContainer}>
      <div className={styles.content}>
        <Logo />
        <SearchInput />
        <div className={styles.container}>
          <div className={styles.mode}>
            <ModeSwitcher />
          </div>
          <div className={styles.button}>
            <LogoutButton />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        {HeaderNavItems.map((item) => (
          <NavMenu
            key={item.title}
            icon={item.icon}
            title={item.title}
            href={item.href}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
