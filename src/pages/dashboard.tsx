import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

const NetWorthCard = dynamic(
  () => import('../components/NetWorthCard')
);

export default function Dashboard() {
  const { connected, publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    // Если кошелек не подключен, перенаправляем на /connect
    if (!connected && typeof window !== 'undefined') {
      router.push('/connect');
    }
  }, [connected, router]);

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