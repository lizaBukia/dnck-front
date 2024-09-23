import { AlbumInterfaces } from "@/app/Interfaces/album.interfaces";
import { ArtistInterface } from "@/app/Interfaces/artist.interface";
import { MusicInterface } from "@/app/Interfaces/music.interface";

export interface SearchInterface {
    musics: MusicInterface[],
    albums: AlbumInterfaces[],
    artists: ArtistInterface[]
  }
  