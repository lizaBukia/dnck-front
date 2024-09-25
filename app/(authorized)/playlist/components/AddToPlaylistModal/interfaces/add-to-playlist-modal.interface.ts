export interface AddToPlaylistModalPropsInterface {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  musicId: number[];
  album?: boolean | undefined;
}
