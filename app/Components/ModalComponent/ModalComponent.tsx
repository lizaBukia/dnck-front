import styles from './ModalComponent.module.scss';
import Input from '../Input/Input';
import { ModalComponentPropsInterface } from './interfaces/modal-component-props.interface';
import { ModalComponentType } from './types/modal-component.type';
import { InputTypeEnum } from '../Input/enum/input-type.enum';
import Button from '../Button/Button';
import { ButtonTypeEnum } from '../Button/enums/button-type.enum';
import { isDarkState } from '@/app/States/States';
import { useRecoilValue } from 'recoil';

const ModalComponent: ModalComponentType = (
  props: ModalComponentPropsInterface,
) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;

  return (
    <div
      className={`${className} ${styles.playlistWrapper}  ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.headingWrapper}>
        <h1 className={`${className} ${styles.heading} ${isDark ? styles.dark : styles.light}`}>
          {props.Heading}
        </h1>
      </div>
      <div className={styles.contentWrapper}>
        <span className={`${className} ${styles.title} ${isDark ? styles.dark : styles.light}`}>
          {props.Title}
        </span>
        <Input
          type={InputTypeEnum.Text}
          placeholder={'Add Title'}
          isDark={isDark}
          className={styles.input}
        />
        <Button
          className={styles.button}
          type={ButtonTypeEnum.Primary}
          onClick={() => {}}
        >
          Create
        </Button>
      </div>
    </div>
  );
};
export default ModalComponent;
