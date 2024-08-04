import { ReactNode } from 'react';

export interface DropdownButtonPropsInterface {
  children: ReactNode;
  icon: ReactNode;
  width: number;
  height: number;
  darkMode?: boolean;
  onClick?: () => void;
}
