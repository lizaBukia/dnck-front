import { NavItemPropsInterface } from '../../NavItem/interfaces/nav-item-props.interface';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';

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
