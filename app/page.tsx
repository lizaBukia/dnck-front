'use client';
import Button from './Components/Button/Button';
import { ButtonTypeEnum } from './Components/Button/enums/button-type.enum';

import Input from './Components/Input/Input';
import { InputTypeEnum } from './Components/Input/enum/input-type.enum';

export default function Home(): JSX.Element {
  return (
    <div>
      <Button
        type={ButtonTypeEnum.Primary}
        onClick={() => console.log('darxeuli maq')}
      >
        uihi8yughiy8
      </Button>
      <Input type={InputTypeEnum.Text} placeholder={'Search'} isDark={false} />
    </div>
  );
}
