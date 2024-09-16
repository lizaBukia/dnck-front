import HitsCard from '../HitsCard/HitsCard';
import { HitsCardItemsInterface } from '../HitsCard/interfaces/hits-card-items.interface';
import styles from './HitsCards.module.scss';

const HitsCards = (props: { items: HitsCardItemsInterface[] }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {props.items.map((item, index) => (
          <HitsCard
            key={index}
            backgroundImage={item.backgroundImage}
            album={item.album}
            src={item.src}
            dropDownItems={item.dropDownItems}
          />
        ))}
      </div>
    </div>
  );
};

export default HitsCards;
