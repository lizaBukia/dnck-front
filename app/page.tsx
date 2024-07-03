import AlbumCards from './Components/AlbumCards/AlbumCards';
import { IconNameEnum } from './Components/Icon/enums/icon-name.enum';

export default function Home(): JSX.Element {
  return (
    <div>
      <AlbumCards
        albumName={'dsjkhbjkdh'}
        artistName={'jhsdgvjhsavgd'}
        image={''}
        items={[
          {
            albumName: 'wepofkewf',
            artistName: 'ewofweopfi',
            image:
              'https://www.billboard.com/wp-content/uploads/2023/07/aretha-franklin-young-gifted-black-1972-billboard-1240.jpg?w=1024',
            dropDownItems: [
              {
                title: ',wepofpklewf',
                icon: IconNameEnum.Album,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
