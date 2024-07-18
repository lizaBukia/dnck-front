'use client';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';
import { HitsItems } from './Components/HitsCard/HitsItems/HitsItems';
import HitsCards from './Components/HitsCards/HitsCards';
import Input from './Components/Input/Input';
import { InputTypeEnum } from './Components/Input/enum/input-type.enum';
import PlayButton from './Components/PlayButton/PlayButton';
import { PlayButtonTypeEnum } from './Components/PlayButton/enums/play-button-type.enum';
import PlayButtonMobile from './Components/PlayButtonMobile/PlayButtonMobile';
import { PlayButtonMobileTypeEnum } from './Components/PlayButtonMobile/enums/play-button-mobile-type.enum';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';

export default function Home(): JSX.Element {
  return (
    <div>
      <Button type={ButtonTypeEnum.Primary} onClick={() => {}}>
        uihi8yughiy8
      </Button>
      <Input type={InputTypeEnum.Text} placeholder={'Search'} isDark={true} />
      <PlayButton
        icon={PlayButtonTypeEnum.Pause}
        onClick={() => { } }
        width={48}
        height={48}      />
      <PlayButtonMobile
        icon={PlayButtonMobileTypeEnum.Pause}
        onClick={() => {}}
        width={48}
        height={48}
        isDark={false}
      />
      <MusicPlayer MusicTitle={'Lose Control'} ArtistName={'Teddy Swing'} BackgroundImage={'image75.png'}/>
      
      <HitsCards items={HitsItems} />
    </div>
    
  );
}
