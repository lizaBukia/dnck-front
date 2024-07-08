import NavItem from '../NavItem/NavItem';
import { NavItemPropsInterface } from '../NavItem/interfaces/nav-item-props.interface';
import { NavItemsType } from '../NavItem/types/nav-item.type';
import styles from './NavMenu.module.scss';
// import { NavMenuPropsInterface } from './interfaces/nav-menu-props.interface';
// import { NavMenuType } from './types/nav-menu.type';

const NavMenu: NavItemsType = (props: NavItemPropsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <NavItem
          key={props.href}
          icon={props.icon}
          href={props.href}
          title={props.title}
          className={props?.className}
        />
      </div>
    </div>
  );
};
export default NavMenu;
