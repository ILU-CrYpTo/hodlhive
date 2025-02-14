import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

const NetWorthCard = dynamic(
  () => import('../components/NetWorthCard')
);

export default function Dashboard() {
  const { connected, connecting } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connecting && !connected) {
      router.push('/connect');
    }
  }, [connected, connecting, router]);

  if (connecting) return <div>Connecting wallet...</div>;
  if (!connected) return <div>Redirecting...</div>;

  // Если кошелек подключен, показываем дашборд
  if (connected) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <NetWorthCard />
      </div>
    );
  }

  // Показываем лоадер во время проверки
  return <div className="text-center p-8">Checking wallet status...</div>;
}