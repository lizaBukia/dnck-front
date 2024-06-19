import NavItem from '../NavItem/NavItem';
import { NavItemsInerface } from './interfaces/navMenu-props.iterface';
import styles from './navMenu.module.scss';
import { NavMenuType } from './types/nav-menu.type';

const NavMenu: NavMenuType = (props: { items: NavItemsInerface[] }) => {
  console.log(props.items);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {props.items.length &&
          props.items.map((item) => {
            return (
              <NavItem
                key={item.href}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NavMenu;
