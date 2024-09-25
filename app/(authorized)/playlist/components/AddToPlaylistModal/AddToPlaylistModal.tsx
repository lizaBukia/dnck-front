import { FC, useState, FormEvent } from 'react';
import useSWR from 'swr';
import styles from './AddToPlaylistModal.module.scss';
import { AddToPlaylistModalPropsInterface } from './interfaces/add-to-playlist-modal.interface';
import { ApiClient } from '@/app/Api/api';
import { fetcher } from '@/app/Api/fetcher';
import Button from '@/app/Components/Button/Button';
import { ButtonTypeEnum } from '@/app/Components/Button/enums/button-type.enum';
import Modal from '@/app/Components/Modal/Modal';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';

const AddToPlaylistModal: FC<AddToPlaylistModalPropsInterface> = (
  props: AddToPlaylistModalPropsInterface,
) => {
  const { data: playlists } = useSWR<PlaylistInterface[]>(
    '/playlists/personal',
    fetcher,
  );
  const [selectedPlaylists, setSelectedPlaylists] = useState<number[]>([]);

  const handleCheckboxChange = (id: number): void => {
    setSelectedPlaylists((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((playlistId) => playlistId !== id)
        : [...prevSelected, id],
    );
  };

  const filteredPlaylists: PlaylistInterface[] = [];

  if (playlists?.length && props.album) {
    for (const item of playlists) {
      const doesNotIncludesMusic: boolean = true;
      for (const music of item.musics) {
        if (props.musicId.includes(music.id)) break;
      }
      if (doesNotIncludesMusic) {
        filteredPlaylists.push(item);
      }
    }
  }

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (selectedPlaylists.length === 0) {
      alert('Please select at least one playlist');
      return;
    }
    console.log(selectedPlaylists);

    for (let i: number = 0; i < selectedPlaylists.length; i++) {
      ApiClient.patch(`/playlists/${Number(selectedPlaylists[i])}`, {
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
                onChange={() => handleCheckboxChange(Number(item.id))}
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
