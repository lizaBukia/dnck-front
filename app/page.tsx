'use client';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';
import { IconNameEnum } from './Components/Icon/enums/icon-name.enum';
import NavMenu from './Components/NavMenu/navMenu';

export default function Home(): JSX.Element {
  return (
    <>
      <Button
        type={ButtonTypeEnum.Primary}
        onClick={() => console.log('darxeuli maq')}
      >
        uihi8yughiy8
      </Button>
      <NavMenu
        items={[
          {
            icon: IconNameEnum.Home,
            href: '/',
            title: 'Home',
          },
          {
            icon: IconNameEnum.Dot,
            href: '/dot',
            title: 'Playlist',
          },
          {
            icon: IconNameEnum.PlayList,
            href: '/albums',
            title: 'Albums',
          },
        ]}
      />
    </>
  );
}
