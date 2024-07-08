'use client';

import { useRecoilState } from 'recoil';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import HeaderNavItems from './HeaderNavItems/HeaderNavItems';
import { HeaderPropsInterface } from './Interfaces/Header-props.interface';
import Logo from './Logo/Logo';
import LogoutButton from './Logout-Button/LogoutButton';
import ModeWitcher from './Mode/Mode';
import SearchInput from './SearchInput/SearchInput';
import { HeaderType } from './Type/Header.type';
import { isDarkState } from '@/app/States/states';

const Header: HeaderType = (props: HeaderPropsInterface) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  if (props.isDark) {
    setDark(dark);
  }

  return (
    <div className={dark ? styles.lightContainer : styles.darkContainer}>
      <div className={styles.content}>
        <Logo />
        <SearchInput />
        <div className={styles.container}>
          <div className={styles.mode}>
            <ModeWitcher />
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
