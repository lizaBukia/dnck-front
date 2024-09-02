'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './Logo.module.scss';
import { isDarkState } from '@/app/States/States';

const Logo = (): JSX.Element => {
  const [dark, setDark] = useRecoilState(isDarkState);
  const [logo, setLogo] = useState('icons/logoferadi.svg');

  useEffect(() => {
    setDark(localStorage.getItem('isDark') === 'true');

    if (dark) {
      setLogo('icons/Untitled.svg');
    } else {
      setLogo('icons/lastTry.svg');
    }
  }, [dark]);

  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <Image src={logo} alt={'logogvegirsaa'} width={124} height={50} />
      </Link>
    </div>
  );
};

export default Logo;
