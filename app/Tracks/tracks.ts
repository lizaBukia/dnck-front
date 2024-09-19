import { TrackDataType } from './types/track.type';

export const tracks: TrackDataType[] = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artistName: 'Queen',
    albumName: 'A Night at the Opera',
    duration: 600,
    src: '/bohemianRhapsody.mp3',
    imgUrl: '/images/bohemian-rhapsody.jpg',
  },
  {
    id: 2,
    title: 'Stairway to Heaven',
    artistName: 'Led Zeppelin',
    albumName: 'Led Zeppelin IV',
    duration: 801,
    src: '/stairwayToHeaven.mp3',
    imgUrl: '/images/stairway-to-heaven.jpg',
  },
  {
    id: 3,
    title: 'Imagine',
    artistName: 'John Lennon',
    albumName: 'Imagine',
    duration: 353,
    src: '/imagine.mp3',
    imgUrl: '/images/imagine.jfif',
  },
];
