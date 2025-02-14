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
    // Если кошелек уже подключен, перенаправляем на /dashboard
    if (connected) {
      router.push('/dashboard');
    }
  }, [connected, router]);

  return <WalletConnector />;
}