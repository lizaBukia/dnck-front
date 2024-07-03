'use client';

import { useRecoilState } from 'recoil';
import styles from './Header.module.scss';
import HeaderButton from './HeaderButton/HeaderButton';
import HeaderNav from './HeaderNavigation/HeaderNavigation';
import { HeaderPropsInterface } from './Interfaces/Header-props.interface';
import Logo from './Logo/Logo';
import Mode from './Mode/Mode';
import Search from './SearchInput/SearchInput';
import { HeaderType } from './Type/Header.type';
import { isModeState } from '@/app/States/States';

const Header: HeaderType = (props: HeaderPropsInterface) => {
  const [dark, setDark] = useRecoilState(isModeState);

  if (props.mode) {
    setDark(dark);
  }
  return (
    <div className={dark ? styles.lightContainer : styles.darkContainer}>
      <div className={styles.content}>
        <Logo />
        <Search />
        <div className={styles.modeAndLog}>
          <Mode />
          <HeaderButton />
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
