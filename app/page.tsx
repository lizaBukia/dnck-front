import { AlbumCardItemsInterface } from './Components/AlbumCard/interfaces/album-card-items.interface';
import AlbumCards from './Components/AlbumCards/AlbumCards';

export default function Home(): JSX.Element {
  const items: AlbumCardItemsInterface[] = [
    {
      image:
        'https://www.billboard.com/wp-content/uploads/2023/07/asap-rocky-long-live-asap-2013-billboard-1240.jpg?w=1024',
      albumName: 'wefowekfo',
      artistName: 'bhsbahbsh',
    },
  ];

  return (
    <div>
      <AlbumCards
        items={items}
        albumName={'agvsgvs'}
        artistName={'hbhsbdh'}
        image={
          'https://www.billboard.com/wp-content/uploads/2023/07/asap-rocky-long-live-asap-2013-billboard-1240.jpg?w=1024'
        }
      />
    </div>
  );
}
