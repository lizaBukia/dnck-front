import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import { NavItemPropsInterface } from '../../NavItem/interfaces/nav-item-props.interface';

const HeaderNavigation: NavItemPropsInterface[] = [
  {
    icon: IconNameEnum.Home,
    href: '/',
    title: 'Home',
  },
  {
    icon: IconNameEnum.Play,
    href: '/playlist',
    title: 'Playlist',
  },
  {
    icon: IconNameEnum.Album,
    href: '/albums',
    title: 'Albums',
  },
];

export default HeaderNavigation;
