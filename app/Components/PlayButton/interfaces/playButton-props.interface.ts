import { ReactNode } from 'react';
import { PlayButtonDesignTypeEnum } from '../types/playButtondesign-type.enum';

export interface PlayButtonPropsInterface {
  icon: string;
  playing: boolean;
  onClick: () => void;
  type: PlayButtonDesignTypeEnum;
}
