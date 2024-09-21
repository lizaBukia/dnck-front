import React, { forwardRef } from 'react';
import styles from './Input.module.scss';
import { InputIconPositionEnum } from './enum/input-icon-position.enum';
import { InputPropsInterface } from './interfaces/input-props.interface';

export const Input: React.ForwardRefExoticComponent<
  Omit<InputPropsInterface, 'ref'> & React.RefAttributes<HTMLInputElement>
  // eslint-disable-next-line react/display-name
> = forwardRef<HTMLInputElement, InputPropsInterface>(
  (
    {
      value,
      onChange,
      icon,
      iconPosition = InputIconPositionEnum.Left,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`${styles.inputWrapper} ${styles.darkWrapper}`}>
        {iconPosition === InputIconPositionEnum.Left && icon}
        <input
          className={`${styles.input} ${styles.dark}`}
          value={value}
          onChange={onChange}
          {...rest}
          ref={ref}
        />
        {iconPosition === InputIconPositionEnum.Right && icon}
      </div>
    );
  },
);

export default Input;
