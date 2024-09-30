import HitsCard from '../HitsCard/HitsCard';
import { HitsCardItemsInterface } from '../HitsCard/interfaces/hits-card-items.interface';
import styles from './HitsCards.module.scss';

const HitsCards = (props: { items: HitsCardItemsInterface[] }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {props.items.map((item) => (
          <HitsCard
            key={item.id}
            backgroundImage={item.backgroundImage}
            album={item.album}
            src={item.src}
            name={item.name}
            onClick={item.onClick}
            id={item.id}
            dropDownItems={item.dropDownItems}
          />
        ))}
      </div>
    </div>
  );
};

export default HitsCards;
