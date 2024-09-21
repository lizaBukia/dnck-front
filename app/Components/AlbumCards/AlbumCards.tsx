import AlbumCard from '../AlbumCard/AlbumCard';
import styles from './AlbumCards.module.scss';
import { AlbumCardsPropsInterface } from './interfaces/album-cards-props.interface';
import { AlbumCardsType } from './type/album-cards.type';

const  AlbumCards: AlbumCardsType = (props: AlbumCardsPropsInterface) => {
  return (
    <div className={styles.container}>
      {props?.items?.map((item, idx) => (
        <AlbumCard
          key={idx}
          darkMode={false}
          imgUrl={item.imgUrl}
          artists={item.artists}
          title={item.title}
          dropDownItems={item.dropDownItems}
        />
      ))}
    </div>
  );
};

export default AlbumCards;
