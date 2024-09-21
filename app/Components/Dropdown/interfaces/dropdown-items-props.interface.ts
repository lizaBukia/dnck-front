import { ReactNode } from 'react';

export interface DropDownItemsInterface {
  title: string | ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}
