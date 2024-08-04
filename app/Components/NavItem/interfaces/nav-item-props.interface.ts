import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';

export interface NavItemPropsInterface {
  title: string;
  icon: IconNameEnum;
  href: string;
  className?: string;
}
