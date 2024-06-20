import { ReactNode } from 'react';

export interface DropdownContainerPropsInterface {
  darkMode: boolean;
  items: DropDownItemsIntertface[];
}

export interface DropDownItemsIntertface {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}
