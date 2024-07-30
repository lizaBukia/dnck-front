'use client';
import { useState } from 'react';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';
import Input from './Components/Input/Input';
import { InputTypeEnum } from './Components/Input/enum/input-type.enum';
import Modal from './Components/Modal/Modal';
import Player from './Components/Player/Player';
import SingleArtistCard from './Components/SingleArtistCard/SingleArtistCard';
import PlaylistModal from './Components/PlaylistModal/PlaylistModal';

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button type={ButtonTypeEnum.Primary} onClick={() => {}}>
        uihi8yughiy8
      </Button>
      <Input type={InputTypeEnum.Text} placeholder={'Search'} isDark={true} />

      <Player onClick={() => {}} />
      <SingleArtistCard artistName={'Drake'} albums={'23 Albums'} />
      <Button onClick={onClick} type={ButtonTypeEnum.Primary}>
        Add To Playlist
      </Button>
      <div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <PlaylistModal heading={'Create New Playlist'} title={'Add Title'} />
        </Modal>
      </div>
    </div>
  );
}
