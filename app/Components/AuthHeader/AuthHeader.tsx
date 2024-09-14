import Logo from '../Header/Logo/Logo';
import ModeSwitcher from '../Header/ModeSwitcher/ModeSwitcher';
import styles from './AuthHeader.module.scss';

const AuthHeader = (): JSX.Element => {
  return (
    <div className="container">
      <div className={`${styles.content} ${styles.darkContent}`}>
        <Logo />
        <ModeSwitcher />
      </div>
    </div>
  );
};

export default AuthHeader;
