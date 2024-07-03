import { ReactNode } from 'react';
import { PlayButtonDesignTypeEnum } from '../types/playButtondesign-type.enum';

export interface PlayButtonPropsInterface {
  icon: string;
  onClick: () => void;
  type: PlayButtonDesignTypeEnum;
}
