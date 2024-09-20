'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import styles from './page.module.scss';
import { ApiClient } from '@/app/Api/api';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCards from '@/app/Components/AlbumCards/AlbumCards';
import Button from '@/app/Components/Button/Button';
import { ButtonTypeEnum } from '@/app/Components/Button/enums/button-type.enum';
import ModeSwitcher from '@/app/Components/Header/ModeSwitcher/ModeSwitcher';
import Heading from '@/app/Components/Heading/Heading';
import { HeadingTypeEnum } from '@/app/Components/Heading/enums/heading-type.enum';
import Icon from '@/app/Components/Icon/Icon';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';
// eslint-disable-next-line import/no-named-as-default
import Input from '@/app/Components/Input/Input';
import { InputTypeEnum } from '@/app/Components/Input/enum/input-type.enum';
import Modal from '@/app/Components/Modal/Modal';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';

export default function AlbumPage(): JSX.Element {
  const { data } = useSWR<PlaylistInterface[]>('/playlists', fetcher);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  const handleCreatePlaylist = async (values: {
    name: string;
  }): Promise<void> => {
    try {
      await ApiClient.post('/playlists', { title: values.name });

      await mutate('/playlists');

      setIsModalOpen(false);
      reset();
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  const onClick = (): void => {
    setIsModalOpen(true);
  };

  return (
    <div className={`${styles.container} ${styles.lightContainer}`}>
      <div className={styles.mainPage}>
        <div className={`${styles.contentWrapper} ${styles.lightContent}`}>
          <div className={styles.mobileHeading}>
            <div className={styles.mobileText}>
              <span className={styles.primaryTextLarge}>
                Let’s start new adventure
                <span className={styles.colored}> with you</span>
              </span>
            </div>
            <ModeSwitcher />
          </div>
          <div>
            <div className={styles.heading}>
              <Heading type={HeadingTypeEnum.H5}>My Playlist</Heading>
              <Button type={ButtonTypeEnum.Secondary} onClick={onClick}>
                <Icon name={IconNameEnum.PlusActive} width={14} height={14} />
                Create Playlist
              </Button>
            </div>

            <div>
              {data && data.length > 0 && (
                <AlbumCards
                  items={data.map((playlist) => ({
                    title: playlist.title,
                    imgUrl: playlist.history?.location,
                    dropDownItems: [],
                    artists: [],
                  }))}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className={styles.modal}>
            <h2>Create New Playlist</h2>
            <form
              className={styles.playlistModal}
              onSubmit={handleSubmit(handleCreatePlaylist)}
            >
              <Input
                type={InputTypeEnum.Text}
                placeholder="Enter playlist name"
                isDark={false}
                {...register('name')}
              />
              <Button type={ButtonTypeEnum.Primary} htmlType="submit">
                Create
              </Button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
