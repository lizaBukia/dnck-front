import Image from 'next/image';
import { IconNameEnum } from './enums/icon-name.enum';

interface Props {
  name: IconNameEnum;
  isActive?: boolean;
  width: number;
  height: number;
}

const Icon: (props: Props) => JSX.Element = (props: Props) => {
  const src: string = `/icons/${props.name}${props.isActive ? '-active' : ''}.svg`;

  return (
    <Image src={src} alt="icon" width={props.width} height={props.height} />
  );
};

export default Icon;
