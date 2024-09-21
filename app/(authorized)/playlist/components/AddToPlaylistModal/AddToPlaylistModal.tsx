import Modal from '@/app/Components/Modal/Modal';
import { FC, useState } from 'react';
import { AddToPlaylistModalPropsInterface } from './interfaces/add-to-playlist-modal.interface';
import useSWR from 'swr';
import { PlaylistInterface } from '@/app/Interfaces/playlist.interface';
import { fetcher } from '@/app/Api/fetcher';

const AddToPlaylistModal: FC<AddToPlaylistModalPropsInterface> = (
  props: AddToPlaylistModalPropsInterface,
) => {
  const { data: playlists } = useSWR<PlaylistInterface[]>(
    '/playlists/personal',
    fetcher,
  );
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <form>
        {playlists && 
        playlists.map((item) => 
        <>

                <input type='checkbox' value={item.id} id={String(item.id)} />
                <label htmlFor={String(item.id)}>
                    {item.title}
                </label>

        </>

        )
        )
    
        }
      </form>
    </Modal>
  );
};
