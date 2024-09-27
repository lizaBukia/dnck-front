'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';
import styles from './page.module.scss';
import { ApiClient } from '@/app/Api/api';
import { fetcher } from '@/app/Api/fetcher';
import AlbumCard from '@/app/Components/AlbumCard/AlbumCard';
import Button from '@/app/Components/Button/Button';
import { ButtonTypeEnum } from '@/app/Components/Button/enums/button-type.enum';
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
  const { data: playlists } = useSWR<PlaylistInterface[]>(
    '/playlists/personal',
    fetcher,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<{ name: string }>();
  const router: AppRouterInstance = useRouter();

  const handleCreatePlaylist = async (values: {
    name: string;
  }): Promise<void> => {
    try {
      await ApiClient.post('/playlists', { title: values.name });
      await mutate('/playlists/personal');
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
          <div className={styles.wrapper}>
            <div className={styles.heading}>
              <Heading type={HeadingTypeEnum.H5}>My Playlist</Heading>
              <Button type={ButtonTypeEnum.Secondary} onClick={onClick}>
                <Icon name={IconNameEnum.PlusActive} width={14} height={14} />
                Create Playlist
              </Button>
            </div>
            <div className={styles.playlists}>
              <div className={styles.page}>
                {playlists &&
                  playlists.length > 0 &&
                  playlists.map((playlist) => {
                    console.log(playlist.musics, 'musics');
                    return (
                      <AlbumCard
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                          e.stopPropagation();
                          router.push(`/playlist/${playlist.id}`);
                        }}
                        key={playlist.id}
                        imgUrl={
                          playlist?.musics?.[0]?.album?.history?.location ??
                          '/default.png'
                        }
                        artists={[]}
                        title={playlist.title}
                        dropDownItems={[
                          {
                            icon: (
                              <Icon
                                name={IconNameEnum.Delete}
                                width={14}
                                height={14}
                              />
                            ),
                            title: 'Delete',
                            onClick: async (
                              e: React.MouseEvent<HTMLDivElement>,
                            ): Promise<void> => {
                              e.stopPropagation();
                              try {
                                await ApiClient.delete(
                                  `/playlists/${playlist.id}`,
                                );
                                mutate('/playlists/personal');
                              } catch (error) {
                                console.error(
                                  'Error deleting playlist:',
                                  error,
                                );
                              }
                            },
                          },
                        ]}
                      />
                    );
                  })}
              </div>
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
