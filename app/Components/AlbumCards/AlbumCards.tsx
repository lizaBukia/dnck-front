import AlbumCard from '../AlbumCard/AlbumCard';
import { AlbumCardsPropsInterface } from './interfaces/album-cards-props.interface';
import { AlbumCardsType } from './type/album-cards.type';

const AlbumCards: AlbumCardsType = (props: AlbumCardsPropsInterface) => {
  return (
    <div>
      {props.items.map((item, idx) => (
        <AlbumCard
          key={idx}
          darkMode={false}
          image={item.image}
          artistName={item.artistName}
          albumName={item.albumName}
        />
      ))}
    </div>
  );
};

export default AlbumCards;
