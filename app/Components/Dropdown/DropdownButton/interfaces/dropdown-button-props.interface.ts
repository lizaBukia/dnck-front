import React, { ReactNode } from 'react';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';

export interface DropdownButtonPropsInterface {
  children?: ReactNode;
  icon: IconNameEnum | ReactNode;
  width: number;
  height: number;
  darkMode?: boolean;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  title: string | ReactNode;
}
