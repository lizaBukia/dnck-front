import Image from 'next/image';
import styles from './Icon.module.scss';
import { IconPropsInterface } from './interfaces/icon-props.interface';
import { IconType } from './types/icon.type';

const Icon: IconType = (props: IconPropsInterface) => {
  const src: string = `/icons/${props.name}${props.isActive ? '-active' : ''}.svg`;

  return (
    <Image
      src={src}
      alt="icon"
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      className={styles.IconSize}
    />
  );
};

export default Icon;
