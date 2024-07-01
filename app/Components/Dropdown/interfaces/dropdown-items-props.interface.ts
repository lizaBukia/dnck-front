import { ReactNode } from 'react';

export interface DropDownItemsInterface {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}
