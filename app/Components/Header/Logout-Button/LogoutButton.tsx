import { eraseCookie, setCookie } from '@/helpers/cookies';
import Button from '../../Button/Button';
import { ButtonIconPositionEnum } from '../../Button/enums/button-icon-position.enum';
import { ButtonTypeEnum } from '../../Button/enums/button-type.enum';
import Icon from '../../Icon/Icon';
import styles from './LogoutButton.module.scss';
import { IconNameEnum } from '@/app/Components/Icon/enums/icon-name.enum';
import { useRouter } from 'next/navigation';

const LogoutButton = (): JSX.Element => {
  const router = useRouter();

  const onClick = () => {
    eraseCookie('accessToken', 0);
    router.push('/login');
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <Button
        position={ButtonIconPositionEnum.Right}
        icon={<Icon name={IconNameEnum.Logout} width={24} height={24} />}
        type={ButtonTypeEnum.Primary}
        htmlType={''}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
