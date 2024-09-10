import AuthHeader from '../Components/AuthHeader/AuthHeader';

const AuthLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
