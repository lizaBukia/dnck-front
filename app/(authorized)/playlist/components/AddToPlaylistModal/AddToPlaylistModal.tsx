import Modal from '@/app/Components/Modal/Modal';
import { FC, useState, FormEvent } from 'react';
import { AddToPlaylistModalPropsInterface } from './interfaces/add-to-playlist-modal.interface';
import useSWR from 'swr';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';
import { fetcher } from '@/app/Api/fetcher';
import Button from '@/app/Components/Button/Button';
import { ButtonTypeEnum } from '@/app/Components/Button/enums/button-type.enum';
import styles from './AddToPlaylistModal.module.scss';
import { ApiClient } from '@/app/Api/api';

const AddToPlaylistModal: FC<AddToPlaylistModalPropsInterface> = (
  props: AddToPlaylistModalPropsInterface,
) => {
  const { data: playlists } = useSWR<PlaylistInterface[]>(
    '/playlists/personal',
    fetcher,
  );
  const [selectedPlaylists, setSelectedPlaylists] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedPlaylists((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((playlistId) => playlistId !== id)
        : [...prevSelected, id],
    );
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (selectedPlaylists.length === 0) {
      alert('Please select at least one playlist');
      return;
    }
    for (let i = 0; i < selectedPlaylists.length; i++) {
      ApiClient.patch(`/playlists/${selectedPlaylists[i]}`, {
        musicIds: props.musicId,
      });
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      className={styles.modalContent}
    >
      <div className={`${styles.modalHeading} ${styles.lightContent}`}>
        <h2>Select Playlist</h2>
      </div>
      <form
        className={`${styles.playlistContent} ${styles.lightContent}`}
        onSubmit={onSubmit}
      >
        {playlists &&
          playlists.map((item) => (
            <div key={item.id} className={styles.playlists}>
              <input
                type="checkbox"
                value={item.id}
                id={String(item.id)}
                onChange={() => handleCheckboxChange(String(item.id))}
              />
              <label className={styles.naming} htmlFor={String(item.id)}>
                {item.title}
              </label>
            </div>
          ))}
        <Button type={ButtonTypeEnum.Primary} htmlType="submit">
          Done
        </Button>
      </form>
    </Modal>
  );
};

export default AddToPlaylistModal;
