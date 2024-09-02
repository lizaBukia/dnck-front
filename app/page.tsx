import Authorization from './(auth)/logIn/page';
// import MainPage from './mainPage/page';

export default function Home(): JSX.Element {
  return (
    <div>
      <Authorization />
      {/* <MainPage /> */}
    </div>
  );
}
