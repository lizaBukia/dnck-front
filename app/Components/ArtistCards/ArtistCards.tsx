import ArtistCard from '../ArtistCard/ArtistCard';
import styles from './ArtistCards.module.scss';
import { ArtistCardsPropsInterface } from './interfaces/artist-cards-props.interface';
import { ArtistCardsType } from './type/artist-cards.type';

const ArtistCards: ArtistCardsType = (props: ArtistCardsPropsInterface) => {
  return (
    <div className={styles.container}>
      {props.items.map((item) => (
        <ArtistCard
          key={item.href}
          image={item.image}
          artistName={item.artistName}
          naming={item.naming}
          href={item.href}
          albumName={''}
        />
      ))}
    </div>
  );
};

export default ArtistCards;
