'use client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Button from '../Button/Button';
import { ButtonTypeEnum } from '../Button/enums/button-type.enum';
import Heading from '../Heading/Heading';
import { HeadingTypeEnum } from '../Heading/enums/heading-type.enum';
import Text from '../Text/Text';
import { TextHtmlTypeEnum } from '../Text/enums/text-html-type.enum';
import { TextTypeEnum } from '../Text/enums/text-type.enum';
import styles from './Signup.module.scss';
import { ApiClient } from '@/app/Api/api';

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const password: string = watch('password');
  const confirmPassword: string = watch('confirmPassword');
  const router: AppRouterInstance = useRouter();

  const onSubmit = async (values: FieldValues): Promise<void> => {
    try {
      await ApiClient.post('/auth/register', values);
      alert('User registered successfully');
      router.push('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
    if (password !== confirmPassword) {
      setError('password', {});
    }
  };

  return (
    <div className={`${styles.container} ${styles.darkContainer}`}>
      <div className={styles.content}>
        <div className={styles.test}>
          <div className={styles.image}>
            <Image
              src={'/icons/test1.svg'}
              alt={'brand'}
              width={644}
              height={575}
              className={styles.image}
            />
          </div>
          <div className={styles.form}>
            <form
              className={styles.authorizationForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.signInHeading}>
                <Heading type={HeadingTypeEnum.H1}>
                  Sign Up
                  <span className={styles.projectName}> DNCK.</span>
                </Heading>
              </div>
              <div className={styles.inputs}>
                <label>Email</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  className={`${styles.authorizationInput} ${styles.darkAuthorizationInput}`}
                  placeholder="Enter Your Email"
                />
                {errors.name && (
                  <span className={styles.error}>{`incorrect email`}</span>
                )}
              </div>
              <div className={styles.inputs}>
                <label>Password</label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: 8,
                  })}
                  className={`${styles.authorizationInput} ${styles.darkAuthorizationInput}`}
                  placeholder="Enter Your Password"
                />
              </div>
              <div className={styles.inputs}>
                <label>Re-enter Password</label>
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Please re-enter your password',
                  })}
                  className={`${styles.authorizationInput} ${styles.darkAuthorizationInput}`}
                  placeholder="Re-enter Your Password"
                />
                {errors.rePassword && (
                  <span
                    className={styles.error}
                  >{`Password don't match ${window.alert(`Password don't match`)}`}</span>
                )}
              </div>
              <div className={styles.check}>
                <input className={styles.checkbox} type="checkbox" />
                <label>Remember me</label>
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  className={styles.button}
                  type={ButtonTypeEnum.Primary}
                  htmlType={'submit'}
                  // href={'/login'}
                >
                  Sign Up
                </Button>
                <Text
                  className={styles.signUpContainer}
                  htmlType={TextHtmlTypeEnum.Span}
                  type={TextTypeEnum.PrimaryTextLarge}
                >
                  Already a member ?
                  <Link className={styles.signUp} href={'/login'}>
                    Log In
                  </Link>
                </Text>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
