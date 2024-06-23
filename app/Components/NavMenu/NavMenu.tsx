import NavItem from '../NavItem/NavItem';
import styles from './NavMenu.module.scss';
import { NavMenuPropsInterface } from './interfaces/nav-menu-props.interface';
import { NavMenuType } from './types/nav-menu.type';

const NavMenu: NavMenuType = (props: NavMenuPropsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {props.items.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            href={item.href}
            title={item.title}
            className={item?.className}
          />
        ))}
      </div>
    </div>
  );
};
export default NavMenu;
