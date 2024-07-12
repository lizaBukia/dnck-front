import { useRecoilValue } from 'recoil';
import { isDarkState } from '../../States/States';
import styles from './Input.module.scss';
import { InputIconPositionEnum } from './enum/input-icon-position.enum';
import { InputPropsInterface } from './interfaces/input-props.interface';
import { InputType } from './types/input.type';

const Input: InputType = (props: InputPropsInterface) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.light : styles.dark;
  const iconPosition: InputIconPositionEnum =
    props.iconPosition || InputIconPositionEnum.Left;

  return (
    <div className={styles.inputWrapper}>
      {iconPosition === InputIconPositionEnum.Left && props.icon}
      <input
        className={`${styles.input} ${className}`}
        placeholder={props.placeholder}
        type={props.type}
      />
      {iconPosition === InputIconPositionEnum.Right && props.icon}
    </div>
  );
};

export default Input;
