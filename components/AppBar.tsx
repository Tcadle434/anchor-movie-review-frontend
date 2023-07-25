import { FC } from 'react';
import styles from '../styles/Home.module.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src='/solanaLogo.png' height={20} width={133} />
      <span>Movie Reviews</span>
      <WalletMultiButton />
    </div>
  );
};
