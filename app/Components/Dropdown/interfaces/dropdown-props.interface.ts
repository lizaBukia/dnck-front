import { ReactNode } from 'react';
import { DropDownItemsInterface } from '../dropdownContainer/interfaces/dropdown-container.props.interface';
import { DropDownPositionEnum } from '../enums/dropdown-position.enum';

export interface DropdownPropsInterface {
  icon: ReactNode;
  position: DropDownPositionEnum;
  darkMode: boolean;
  items: DropDownItemsInterface[];
}
export { DropDownPositionEnum };
