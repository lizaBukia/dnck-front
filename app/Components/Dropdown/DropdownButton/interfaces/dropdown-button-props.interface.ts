import { ReactNode } from 'react';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';

export interface DropdownButtonPropsInterface {
  children?: ReactNode;
  icon: IconNameEnum | ReactNode;
  width: number;
  height: number;
  darkMode?: boolean;
  href: string;
  onClick?: () => void;
}
