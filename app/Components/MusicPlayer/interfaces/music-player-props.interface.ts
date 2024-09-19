import { Ref } from 'react';

export interface MusicPlayerPropsInterface {
  MusicTitle: string;
  ArtistName: string;
  BackgroundImage: string;
  src: string;
  onClick: () => void;
  ref: Ref<HTMLAudioElement>;
  togglePlay: () => void;
  handleProgressChange: React.ChangeEventHandler<HTMLInputElement>;
}
