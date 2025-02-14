import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

const NetWorthCard = dynamic(
  () => import('../components/NetWorthCard'),
  { ssr: false }
);

export default function Dashboard() {
  const { connected } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && !connected) {
      router.push('/connect');
    }
  }, [connected, router]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <NetWorthCard />
    </div>
  );
}