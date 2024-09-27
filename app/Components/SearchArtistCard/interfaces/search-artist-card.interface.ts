export interface SearchArtistCardPropsInterface {
  id: number;
  name: string;
  biography: string;
  createdAt: string | Date;
  src: string;
  history?: { location: string };
}
