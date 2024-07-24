'use client';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';
import Input from './Components/Input/Input';
import { InputTypeEnum } from './Components/Input/enum/input-type.enum';
import ModalComponent from './Components/ModalComponent/ModalComponent';
import Player from './Components/Player/Player';
import SingleArtistCard from './Components/SingleArtistCard/SingleArtistCard';

export default function Home(): JSX.Element {
  return (
    <div>
      <Button type={ButtonTypeEnum.Primary} onClick={() => {}}>
        uihi8yughiy8
      </Button>
      <Input type={InputTypeEnum.Text} placeholder={'Search'} isDark={true} />

      <Player onClick={() => {}} />
      <SingleArtistCard artistName={'Drake'} albums={'23 Albums'} />
      <ModalComponent Heading={'Create New Playlist'} Title={'Add Title'}/>
    </div>
  );
}
