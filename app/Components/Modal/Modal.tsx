'use client';
import styles from './Modal.module.scss';
import { ModalPropsInterface } from './interfaces/modal-props.interface';
import { ModalType } from './types/modal.type';
import { isDarkState } from '@/app/States/States';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

const Modal: ModalType = (props: ModalPropsInterface) => {
  const isDark: boolean = useRecoilValue(isDarkState);
  const className: string = isDark ? styles.dark : styles.light;

  useEffect(() => {
    const handleEscape = (event: { key: string }) => {
      if (event.key === 'Escape') {
        props.setIsOpen(false);
      }
    };
    if (props.isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [props.isOpen, props.setIsOpen]);

  if (!props.isOpen) return null;

  const onClick = () => {
    props.setIsOpen(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={`${className} ${styles.modal}`}>
        <div>
          <button
            className={`${className} ${styles.closeButton}`}
            onClick={onClick}
          >
            x
          </button>
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
