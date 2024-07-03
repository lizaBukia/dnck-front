'use client';

import { useRecoilState } from 'recoil';
import styles from './Header.module.scss';
import HeaderButton from './HeaderButton/HeaderButton';
import HeaderNav from './HeaderNavigation/HeaderNavigation';
import { HeaderPropsInterface } from './Interfaces/Header-props.interface';
import Logo from './Logo/Logo';
import Mode from './Mode/Mode';
import SearchInput from './SearchInput/SearchInput';
import { HeaderType } from './Type/Header.type';
import { isDarkState } from '@/app/States/States';

const Header: HeaderType = (props: HeaderPropsInterface) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  if (props.mode) {
    setDark(dark);
  }
  return (
    <div className={dark ? styles.lightContainer : styles.darkContainer}>
      <div className={styles.content}>
        <Logo />
        <SearchInput />
        <div className={styles.container}>
          <div className={styles.mode}>
            <Mode />
          </div>
          <div className={styles.button}>
            <HeaderButton />
          </div>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
