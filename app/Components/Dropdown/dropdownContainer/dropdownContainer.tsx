import DropdownButton from '../DropdownButton/dropdownButton';
import styles from './DropdownContainer.module.scss';
import { DropdownContainerPropsInterface } from './interfaces/dropdown-container.props.interface';
import { DropdownContainerType } from './types/dropdown-container.type';
const DropdownContainer: DropdownContainerType = (
  props: DropdownContainerPropsInterface,
) => {
  return (
    <div
      className={`${styles.dropdownButtonContainer} ${styles.dropdownButtonContainerDark}`}
    >
      {props.items.map((item) => (
        <DropdownButton
          icon={item.icon}
          onClick={item.onClick}
          key={item.title}
          width={0}
          height={0}
        >
          {item.title}
        </DropdownButton>
      ))}
    </div>
  );
};

export default DropdownContainer;
