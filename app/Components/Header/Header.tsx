'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import { ButtonTypeEnum } from '../Button/enums/button-type.enum';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import { headerNavItems } from './HeaderNavItems/HeaderNavItems';
import Logo from './Logo/Logo';
import LogoutButton from './Logout-Button/LogoutButton';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';
import SearchInput from './SearchInput/SearchInput';

const Header: FC = () => {
  const router: AppRouterInstance = useRouter();
  const onClick = (): void => {
    router.push('/');
  };
  const [search, setSearch] = useState('');

  const onSearch = (): void => {
    router.push(`/search?search=${search}`);
  };

  const paramSearch: string | null = useSearchParams().get('search');

  useEffect(() => {
    if (paramSearch) {
      setSearch(paramSearch);
    }
  }, [paramSearch]);

  return (
    <div className={`${styles.testing} ${styles.darkTesting}`}>
      <div className={`${styles.lightContainer} ${styles.darkContainer}`}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div onClick={onClick}>
              <Logo />
            </div>
            <div className={styles.searchButton}>
              <SearchInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
              <Button type={ButtonTypeEnum.Primary} onClick={onSearch}>
                ძიება
              </Button>
            </div>
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
