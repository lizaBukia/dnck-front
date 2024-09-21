'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import { headerNavItems } from './HeaderNavItems/HeaderNavItems';
import Logo from './Logo/Logo';
import LogoutButton from './Logout-Button/LogoutButton';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';
import SearchInput from './SearchInput/SearchInput';
import { HeaderType } from './types/header.type';
import { searchHeaderState } from '@/app/States/States';
import { useRecoilState } from 'recoil';

const Header: HeaderType = () => {
  const router: AppRouterInstance = useRouter();
  const onClick = (): void => {
    router.push('/');
  };
  const [searchValue, setSearchValue] = useRecoilState(searchHeaderState);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue, 'ksguefkzedb')
  return (
    <div className={`${styles.testing} ${styles.darkTesting}`}>
      <div className={`${styles.lightContainer} ${styles.darkContainer}`}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div onClick={onClick}>
              <Logo />
            </div>
            <SearchInput
              type="text"
              value={searchValue}
              placeholder="Search..."
              onChange={handleSearchChange}
            />
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
    </div>
  );
};

export default Header;
