import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import NavItems from '../NavItem/NavItem';
import styles from './navMenu.module.scss';
import { NavMenuType } from './types/nav-menu.type';

const NavMenu: NavMenuType = () => {
  return (
    <div className={styles.container}>
      <NavItems title={'Home'} icon={IconNameEnum.Home} href={'/'} />
      <NavItems
        title={'Playlist'}
        icon={IconNameEnum.PauseBack}
        href={'/Playlist'}
      />
      <NavItems
        title={'Albums'}
        icon={IconNameEnum.PlayList}
        href={'/Albums'}
      />
    </div>
  );
};

export default NavMenu;
