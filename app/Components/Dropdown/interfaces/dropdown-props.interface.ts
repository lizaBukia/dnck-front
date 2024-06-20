import { ReactNode } from 'react';

export enum DropDownPositionEnum {
  Left = 'left',
  Right = 'right',
  Middle = 'middle',
}

export interface DropdownPropsInterface {
  icon: ReactNode;
  position: DropDownPositionEnum;
  darkMode: boolean;
}
