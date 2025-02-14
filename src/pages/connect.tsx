import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WalletConnector = dynamic(
  () => import('../components/WalletConnector'),
  { 
    loading: () => <div>Loading...</div>
  }
);

export default function ConnectPage() {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (connected) {
      // Ждем 1 секунду для стабилизации состояния
      const timeout = setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [connected, router]);

  return <WalletConnector />;
}