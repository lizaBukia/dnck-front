import Header from '../Components/Header/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
        <>
        <Header />
        {children}
        </>
  );
}
