import Dropdown from './Components/Dropdown/Dropdown';
import { DropDownPositionEnum } from './Components/Dropdown/interfaces/dropdown-props.interface';
import Icon from './Components/Icon/Icon';
import { IconNameEnum } from './Components/Icon/enums/icon-name.enum';
import styles from './page.module.scss';


export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div>
        <Dropdown
          icon={<Icon name={IconNameEnum.Dot} width={20} height={20} />}
          position={DropDownPositionEnum.Right}
          darkMode={false} />
      </div>
    </main>
  );
}
