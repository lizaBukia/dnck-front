import { ReactNode } from 'react';
import { ButtonIconPositionEnum } from '../enums/button-icon-position.enum';
import { ButtonTypeEnum } from '../enums/button-type.enum';

export interface ButtonPropsInterface {
  icon?: ReactNode;
  children?: ReactNode;
  position?: ButtonIconPositionEnum;
  type: ButtonTypeEnum;
  onClick?: () => void;
  className?: string;
  htmlType?: string;
  href?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
