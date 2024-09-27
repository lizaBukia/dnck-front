import { FooterNavItems } from '../Header/HeaderNavItems/HeaderNavItems';
import NavMenu from '../NavMenu/NavMenu';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <NavMenu items={FooterNavItems} />
    </div>
  );
};

export default Footer;
