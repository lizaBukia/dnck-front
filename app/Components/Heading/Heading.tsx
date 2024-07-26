import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styles from './Heading.module.scss';
import { HeadingTypeEnum } from './enums/heading-type.enum';
import { HeadingPropsInterface } from './interfaces/heading-props.interface';
import { HeadingType } from './types/heading.type';
import { isDarkState } from '@/app/States/States';

const Heading: HeadingType = (props: HeadingPropsInterface) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);
  const Type: HeadingTypeEnum = props.type;
  const className: string = `${props.type}${dark ? '-dark' : ''}`;
  return <Type className={styles[className]}>{props.children}</Type>;
};

export default Heading;
