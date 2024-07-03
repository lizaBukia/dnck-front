'use client';
import { useState } from 'react';
import styles from './Dropdown.module.scss';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import { DropdownPropsInterface } from './interfaces/dropdown-props.interface';
import { DropdownType } from './types/dropdown.type';

const Dropdown: DropdownType = (props: DropdownPropsInterface) => {
  const [show, setShow] = useState<boolean>(false);

  const onClick = (): void => {
    setShow(!show);
  };

  return (
    <div className={`${styles.wrapper} ${styles[props.position]}`}>
      <div
        className={`${styles.dropdown} ${props.darkMode ? styles.dropdownDark : styles.dropdownLight}`}
        onClick={onClick}
      >
        {props.icon}
      </div>
      <div
        className={`${styles.dropdownContainer} ${show ? styles.visible : ''}`}
      >
        <DropdownContainer items={props.items} darkMode={props.darkMode} />
      </div>
    </div>
  );
};

export default Dropdown;
