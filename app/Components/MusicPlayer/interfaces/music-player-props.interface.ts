import { Url } from "next/dist/shared/lib/router/router";

export interface MusicPlayerPropsInterface {
    musicTitle: string;
    artistName: string;
    backgroundImage: Url;
}