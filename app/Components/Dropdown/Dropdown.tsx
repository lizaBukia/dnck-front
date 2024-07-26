'use client';
import { useState, useRef, RefObject, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styles from './Dropdown.module.scss';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import { DropdownPropsInterface } from './interfaces/dropdown-props.interface';
import { DropdownType } from './types/dropdown.type';
import { isDarkState } from '@/app/States/States';

const Dropdown: DropdownType = (props: DropdownPropsInterface) => {
  const [dark, setDark] = useRecoilState(isDarkState);

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');
  }, [setDark]);

  const [show, setShow] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const onClick = (): void => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.wrapper}`} ref={dropdownRef}>
      <div
        className={`${styles.dropdown} ${dark ? styles.dropdownDark : styles.dropdownLight}`}
        onClick={onClick}
      >
        {props.icon}
      </div>
      <div
        className={`${styles.dropdownContainer} ${show ? styles.visible : ''}  ${styles[props.position]}`}
      >
        <DropdownContainer items={props.items} />
      </div>
    </div>
  );
};
export default Dropdown;
