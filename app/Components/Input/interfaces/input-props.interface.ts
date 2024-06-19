import { ReactNode } from 'react';
import { InputIconPositionEnum } from '../enum/input-icon-position.enum';
import { InputTypeEnum } from '../enum/input-type.enum';

export interface InputPropsInterface {
  position: InputIconPositionEnum;
  icon?: ReactNode;
  iconPosition?: InputIconPositionEnum;
  type: InputTypeEnum;
  placeholder: string;
  isDark: boolean
}
