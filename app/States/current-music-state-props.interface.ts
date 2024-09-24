export interface CurrentMusicStateInterface {
  currentIndex: number;
  currentMusicId: number | null;
  musics: PlayerMusicInterface[];
  currentTime: number;
  isPlaying: boolean;
  imgLink?: string;
}

export interface PlayerMusicInterface {
  id: number | null;
  name: string;
  imgLink: string;
  src: string;
  artistName: string;
}
