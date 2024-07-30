import Button from '../../Button/Button';
import { ButtonIconPositionEnum } from '../../Button/enums/button-icon-position.enum';
import { ButtonTypeEnum } from '../../Button/enums/button-type.enum';
import Icon from '../../Icon/Icon';
import { IconNameEnum } from '../../Icon/enums/icon-name.enum';
import styles from './LogoutButton.module.scss';

const LogoutButton = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Button
        position={ButtonIconPositionEnum.Right}
        icon={<Icon name={IconNameEnum.Logout} width={24} height={24} />}
        type={ButtonTypeEnum.Primary}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
