import dynamic from 'next/dynamic';

const WalletConnector = dynamic(
  () => import('../components/WalletConnector'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ConnectPage() {
  return <WalletConnector />;
}