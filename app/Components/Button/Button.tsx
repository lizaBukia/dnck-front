import styles from './Button.module.scss';
import { ButtonIconPositionEnum } from './enums/button-icon-position.enum';
import { ButtonPropsInterface } from './interfaces/button-props.interface';
import { ButtonType } from './types/button.type';

const Button: ButtonType = (props: ButtonPropsInterface) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[props.type]} ${props.className}`}
    >
      {props.position === ButtonIconPositionEnum.Left && props.icon}
      {props.children}
      {props.position === ButtonIconPositionEnum.Right && props.icon}
    </button>
  );
};

export default Button;
