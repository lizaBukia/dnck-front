import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import NavMenu from '../../NavMenu/NavMenu';
import styles from './HeaderNavigation.module.scss';

const HeaderNav = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavMenu
          items={[
            {
              icon: IconNameEnum.Home,
              href: '/',
              title: 'Home',
            },
            {
              icon: IconNameEnum.Search,
              href: '/Shuffle',
              title: 'Search',
              className: styles.search,
            },
            {
              icon: IconNameEnum.Play,
              href: '/dot',
              title: 'Playlist',
            },
            {
              icon: IconNameEnum.Album,
              href: '/albums',
              title: 'Albums',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HeaderNav;
