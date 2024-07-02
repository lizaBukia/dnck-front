'use client';
import { useState, useRef, RefObject, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import DropdownContainer from './DropdownContainer/dropdownContainer';
import { DropdownPropsInterface } from './interfaces/dropdown-props.interface';
import { DropdownType } from './types/dropdown.type';

const Dropdown: DropdownType = (props: DropdownPropsInterface) => {
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const onClick = (): void => {
    setShow(!show);
  };

  useEffect(() => {
    // Function to close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent): void => {
      console.log(
        dropdownRef.current,
        dropdownRef.current?.contains(event.target as Node),
      );
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.wrapper}`} ref={dropdownRef}>
      <div
        className={`${styles.dropdown} ${props.darkMode ? styles.dropdownDark : styles.dropdownLight}`}
        onClick={onClick}
      >
        {props.icon}
      </div>
      <div
        className={`${styles.dropdownContainer} ${show ? styles.visible : ''}  ${styles[props.position]}`}
      >
        <DropdownContainer items={props.items} darkMode={props.darkMode} />
      </div>
    </div>
  );
};

export default Dropdown;
