import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import { NavItemPropsInterface } from '../../NavItem/interfaces/nav-item-props.interface';

export const headerNavItems: NavItemPropsInterface[] = [
  {
    icon: IconNameEnum.Home,
    href: '/',
    title: 'Home',
  },
  {
    icon: IconNameEnum.PlayList,
    href: '/playlist',
    title: 'Playlist',
  },
  {
    icon: IconNameEnum.Album,
    href: '/albums',
    title: 'Albums',
  },
];
