import Link from 'next/link';
import Button from '../Button/Button';
import { ButtonIconPositionEnum } from '../Button/enums/button-icon-position.enum';
import { ButtonTypeEnum } from '../Button/enums/button-type.enum';
import Icon from '../Icon/Icon';
import { IconNameEnum } from '../Icon/enums/icon-name.enum';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Header.module.scss';
import { HeaderPropsInterface } from './interface/header-props.interface';
import { HeaderType } from './types/header.type';

const Header: HeaderType = (props: HeaderPropsInterface) => {
  return (
    <div
      className={
        props.mode === true ? styles.lightContainer : styles.darkContainer
      }
    >
      <div className={styles.content}>
        <Link href={'/'}>
          <h1 className={styles.logo}>DNCK</h1>
        </Link>
        <div className={styles.input}>
          <Link href={'/'}>
            <Icon name={IconNameEnum.ArrowLeft} width={40} height={40} />
          </Link>
          <Link href={'/'}>
            <Icon name={IconNameEnum.ArrowRight} width={40} height={40} />
          </Link>
        </div>
        <div className={styles.modeAndLog}>
          <div className={styles.modes}>
            <Icon name={IconNameEnum.Sun} width={24} height={24} />
          </div>
          <div className={styles.button}>
            <Button
              position={ButtonIconPositionEnum.Right}
              icon={<Icon name={IconNameEnum.Logout} width={24} height={24} />}
              type={ButtonTypeEnum.Primary}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
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

export default Header;
