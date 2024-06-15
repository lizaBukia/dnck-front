'use client';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';

export default function Home(): JSX.Element {
  return (
    <Button
      type={ButtonTypeEnum.Primary}
      onClick={() => console.log('darxeuli maq')}>
        uihi8yughiy8
    </Button>
  );
}
