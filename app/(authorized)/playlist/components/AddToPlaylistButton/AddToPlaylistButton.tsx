'use client';
import { useState } from 'react';
import AddToPlaylistModal from '../AddToPlaylistModal/AddToPlaylistModal';
import styles from './AddToPlaylistButton.module.scss';
import { AddToPlaylistButtonProsInterface } from './interfaces/add-to-playlist-button-props.interface';
import Icon from '@/app/Components/Icon/Icon';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';
import { AddToPlaylistButtonType } from './types/add-to-playlist-button.type';
import { createPortal } from 'react-dom';

const AddToPlaylistButton: AddToPlaylistButtonType = (
  props: AddToPlaylistButtonProsInterface,
) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (): void => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        className={`${styles.button} ${styles.lightContainer}`}
        onClick={onClick}
      >
        <Icon name={IconNameEnum.Plus} width={14} height={14} />
        <span>Add To Playlist</span>
      </button>
      {createPortal(
        <AddToPlaylistModal
          musicId={props.musicId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />,
        document.body,
      )}
    </>
  );
};

export default AddToPlaylistButton;
