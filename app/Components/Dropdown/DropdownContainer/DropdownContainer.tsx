import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import DropdownButton from '../DropdownButton/DropdownButton';
import styles from './DropdownContainer.module.scss';
import { DropdownContainerPropsInterface } from './interfaces/dropdown-container.props.interface';
import { DropdownContainerType } from './types/dropdown-container.type';
import { isDarkState } from '@/app/States/States';

const DropdownContainer: DropdownContainerType = (
  props: DropdownContainerPropsInterface,
) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);

  const classNames: string[] = [styles.dropdownButtonContainer];

  if (dark) {
    classNames.push(styles.dropdownButtonContainerDark);
  } else {
    classNames.push(styles.dropdownButtonContainerLight);
  }

  return (
    <div className={classNames.join(' ').trim()}>
      {props.items?.map((item) => (
        <DropdownButton
          icon={item.icon}
          onClick={(e) => item.onClick?.(e)}
          title={item.title}
          width={24}
          height={24}
          href={''}
          key={item.id}
        >
          {item.title}
        </DropdownButton>
      ))}
    </div>
  );
};

export default DropdownContainer;
