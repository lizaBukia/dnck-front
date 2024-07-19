'use client';
import AlbumCard from './Components/AlbumCard/AlbumCard';

import { IconNameEnum } from './Components/Icon/enums/icon-name.enum';

export default function Home(): JSX.Element {
  return (
    <div>
      <AlbumCard
        darkMode={true}
        dropDownItems={[{ title: 'Add To Playlist', icon: IconNameEnum.Plus }]}
        image={
          'https://www.billboard.com/wp-content/uploads/2023/07/rihanna-anti-cover-2016-billboard-1240.jpg?w=1024'
        }
        artistName={'Rihanna'}
        albumName={'Anti'}
      />
    </div>
  );
}
