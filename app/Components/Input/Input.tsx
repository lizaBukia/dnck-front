import styles from './Input.module.scss';
import { InputIconPositionEnum } from './enum/input-icon-position.enum';
import { InputPropsInterface } from './interfaces/input-props.interface';
import { InputType } from './types/input.type';

const Input: InputType = (props: InputPropsInterface) => {
  const className = props.isDark ? styles.dark : styles.light;
  const iconPosition = props.iconPosition || InputIconPositionEnum.Left;

  return (
    <div className={styles.inputWrapper}>
      {iconPosition === InputIconPositionEnum.Left && props.icon}
      <input
        className={`${styles.input} ${className}`}
        placeholder={props.placeholder}
      />
      {iconPosition === InputIconPositionEnum.Right && props.icon}
    </div>
  );
};

export default Input;
