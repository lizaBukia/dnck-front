import { ReactNode } from 'react';
import { RefCallBack } from 'react-hook-form';
import { InputIconPositionEnum } from '../enum/input-icon-position.enum';
import { InputTypeEnum } from '../enum/input-type.enum';

export interface InputPropsInterface {
  icon?: ReactNode;
  iconPosition?: InputIconPositionEnum;
  type: InputTypeEnum;
  placeholder: string;
  isDark: boolean;
  name: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: RefCallBack;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
