'use client'
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';
import Icon from '@/app/Components/Icon/Icon';
import styles from './AddToPlaylistButton.module.scss';
import { useState } from 'react';
import AddToPlaylistModal from '../AddToPlaylistModal/AddToPlaylistModal';
import { AddToPlaylistButtonProsInterface } from './interfaces/add-to-playlist-button-props.interface';

const AddToPlaylistButton = (props: AddToPlaylistButtonProsInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  const onClick = (): void => {
    setIsOpen(true);
  };



  return (
    <>
      <button className={`${styles.button} ${styles.lightContainer}`} onClick={onClick}>
        <Icon name={IconNameEnum.Plus} width={14} height={14} />
        <span>Add To Playlist</span>
      </button>

      {isOpen && (
        <AddToPlaylistModal musicId={props.musicId} isOpen={isOpen} setIsOpen={setIsOpen} />
          
      )}
    </>
  );
};

export default AddToPlaylistButton;