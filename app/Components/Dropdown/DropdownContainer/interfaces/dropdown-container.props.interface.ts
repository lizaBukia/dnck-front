import { DropDownItemsInterface } from '../../interfaces/dropdown-items-props.interface';

export interface DropdownContainerPropsInterface {
  darkMode?: boolean;
  items: DropDownItemsInterface[] | undefined;
}

export type { DropDownItemsInterface };
