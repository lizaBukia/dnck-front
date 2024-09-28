import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';
import styles from './page.module.scss';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <Header />
      <div className={`${styles.container} ${styles.lightContainer}`}>
        <div className={styles.mainPage}>
          <div className={styles.wrapper}>
            {children}
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
          <div>
            <div className={`${styles.player} ${styles.darkPlayer}`}>
              <Player />
            </div>
          </div>

          <div className={styles.footer}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
