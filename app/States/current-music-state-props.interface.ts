export interface CurrentMusicStateInterface {
  currentIndex: number;
  currentMusicId: number | null;
  musics: PlayerMusicInterface[];
  originalMusics: PlayerMusicInterface[];
  currentTime: number;
  isPlaying: boolean;
  imgLink?: string;
  isMuted?: boolean;
  isShuffled?: boolean;
}

export interface PlayerMusicInterface {
  id: number | null;
  name: string;
  imgLink: string;
  src: string;
  artistName: string;
  isMuted?: boolean;
}
