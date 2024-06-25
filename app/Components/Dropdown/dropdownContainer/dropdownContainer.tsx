import DropdownButton from '../DropdownButton/DropdownButton';
import styles from './DropdownContainer.module.scss';
import { DropdownContainerPropsInterface } from './interfaces/dropdown-container.props.interface';

const DropdownContainer: (
  props: DropdownContainerPropsInterface,
) => JSX.Element = (props: DropdownContainerPropsInterface) => {
  return (
    <div
      className={`${styles.dropdownButtonContainer} ${props.darkMode ? styles.dropdownButtonContainerDark : styles.dropdownButtonContainerLight}`}
    >
      {props.items.map((item) => (
        <DropdownButton
          icon={item.icon}
          onClick={item.onClick}
          key={item.title}
          darkMode={props.darkMode}
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
