import { ReactNode } from 'react';
import { PlayButtonTypeEnum } from '../enums/playButton-type.enum';

export interface PlayButtonPropsInterface {
  icon: string;
  playing: boolean;
  onClick: () => void; 
  className: string;
  
}

