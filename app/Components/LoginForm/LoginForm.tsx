'use client';

import { AxiosResponse } from 'axios';
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
import styles from './LoginForm.module.scss';
import { ApiClient } from '@/app/Api/api';
import { setCookie } from '@/helpers/cookies';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  interface CustomErrorResponse {
    data: {
      message: string;
    };
    status: number;
  }

  interface CustomError extends Error {
    response?: CustomErrorResponse;
  }

  const router: AppRouterInstance = useRouter();

  const onSubmit = async (values: FieldValues): Promise<void> => {
    try {
      const response: AxiosResponse = await ApiClient.post(
        '/auth/login',
        values,
      );
      const { accessToken } = response.data;

      if (accessToken) {
        setCookie('accessToken', accessToken, 24);
        console.log('User logged in successfully');
        router.push('/');
      } else {
        alert('password is not correct');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        const errorWithResponse: CustomError = err as CustomError;

        if (errorWithResponse.response) {
          const errorResponse: CustomErrorResponse = errorWithResponse.response;
          alert(errorResponse.data.message || 'Something went wrong');
        } else {
          alert(err.message || 'Something went wrong');
        }
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className={`${styles.container} ${styles.darkContainer}`}>
      <div className={`${styles.content} ${styles.darkContent}`}>
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
                <Heading type={HeadingTypeEnum.H2}>
                  Log in
                  <span className={styles.projectName}> DNCK </span>
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
                {errors.email && (
                  <span className={styles.error}>{`errors.email.message`}</span>
                )}
              </div>
              <div className={styles.inputs}>
                <label>Password</label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className={`${styles.authorizationInput} ${styles.darkAuthorizationInput}`}
                  placeholder="Enter Your Password"
                />
                {errors.password && (
                  <span className={styles.error}>
                    {`errors.password.message`}
                  </span>
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
                  href="/"
                >
                  Log In
                </Button>
                <Text
                  className={styles.signUpContainer}
                  htmlType={TextHtmlTypeEnum.Span}
                  type={TextTypeEnum.PrimaryTextLarge}
                >
                  New to DCNK?
                  <Link className={styles.signUp} href={'/signup'}>
                    Sign up
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

export default LoginForm;
