import Header from '../Components/Header/Header';
import RecoilWrapper from '../Components/RecoilWrapper/RecoilWrapper';
import styles from './global.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <RecoilWrapper>
          <div className={`${styles.container} ${styles.darkContainer}`}>
            <Header />
          </div>
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
