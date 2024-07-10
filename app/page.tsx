'use client';
import styles from './page.module.css';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';
import Input from './Components/Input/Input';
import { InputTypeEnum } from './Components/Input/enum/input-type.enum';
import PlayButton from './Components/PlayButton/PlayButton';
import { PlayButtonTypeEnum } from './Components/PlayButton/enums/play-button-type.enum';
import PlayButtonMobile from './Components/PlayButtonMobile/PlayButtonMobile';
import { PlayButtonMobileTypeEnum } from './Components/PlayButtonMobile/enums/play-button-mobile-type.enum';

export default function Home(): JSX.Element {
  return (
    <div>
      <Button
        type={ButtonTypeEnum.Primary}
        onClick={() => console.log('darxeuli maq')}
      >
        uihi8yughiy8
      </Button>
      <Input type={InputTypeEnum.Text} placeholder={'Search'} isDark={true} />
      <PlayButton
        icon={PlayButtonTypeEnum.Pause}
        onClick={() => {}}
        width={48}
        height={48}
      />
      <PlayButtonMobile
        icon={PlayButtonMobileTypeEnum.Pause}
        onClick={() => {}}
        width={48}
        height={48}
        isDark={false}
      />
    </div>
  );
}
