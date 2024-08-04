'use client';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import { headerNavItems } from './HeaderNavItems/HeaderNavItems';
import Logo from './Logo/Logo';
import LogoutButton from './Logout-Button/LogoutButton';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import { HeaderType } from './types/header.type';

const Header: HeaderType = () => {
  return (
    <div className={styles.lightContainer}>
      <div className={styles.header}>
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
          <NavMenu items={headerNavItems} />
        </div>
      </div>
    </div>
  );
};

export default Header;
