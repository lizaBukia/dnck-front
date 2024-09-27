import DownHitsCard from '../DownHitsCard/DownHitsCard';
import { DownHitsCardItemsInterface } from '../DownHitsCard/interfaces/down-hits-card-items-props.interface';
import styles from './DownHitsCards.module.scss';

const DownHitsCards = (props: {
  items: DownHitsCardItemsInterface[];
}): JSX.Element => {
  return (
    <div className={styles.content}>
      {props.items.map((item) => (
        <DownHitsCard
          key={item.id}
          backgroundImage={item.backgroundImage}
          album={item.album}
          src={item.src}
          name={item.name}
          id={item.id}
          dropDownItems={item.dropDownItems}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default DownHitsCards;
