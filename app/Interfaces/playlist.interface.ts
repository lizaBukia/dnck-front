export interface PlaylistInterface {
  id: number;
  title: string;
  history: { location: string };
  createdAt: string | Date;
  deletedAt: string;
}
