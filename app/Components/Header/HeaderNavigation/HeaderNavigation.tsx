import NavMenu from '../../NavMenu/NavMenu';
import HeaderNavigation from '../Items/navigationItems';
import styles from './HeaderNavigation.module.scss';

const HeaderNav = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {HeaderNavigation.map((item) => (
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

export default HeaderNav;
