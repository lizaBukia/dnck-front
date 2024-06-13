import styles from './Text.module.scss';
import { TextHtmlTypeEnum } from './enums/text-html-type.enum';
import { PrimaryTextPropsInterface } from './interfaces/text-props.interface';
import { TextType } from './types/text.type';

const Text: TextType = (props: PrimaryTextPropsInterface) => {
  const Type: TextHtmlTypeEnum = props.htmlType;
  const color: string = props.isDark
    ? props.color.darkColor
    : props.color.lightColor;
  return (
    <Type style={{ color }} className={styles[props.type]}>
      {props.children}
    </Type>
  );
};

export default Text;
