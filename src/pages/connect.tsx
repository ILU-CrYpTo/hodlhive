// import dynamic from 'next/dynamic';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const WalletConnector = dynamic(
//   () => import('../components/WalletConnector'),
//   { 
//     loading: () => <div>Loading...</div>
//   }
// );

// export default function ConnectPage() {
//   const { connected } = useWallet();
//   const router = useRouter();

//   useEffect(() => {
//     if (connected) {
//       // Ждем 1 секунду для стабилизации состояния
//       const timeout = setTimeout(() => {
//         router.push('/dashboard');
//       }, 1000);
//       return () => clearTimeout(timeout);
//     }
//   }, [connected, router]);

//   return <WalletConnector />;
// }

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const MaintenancePage = () => {
  return (
    <div 
      className={inter.className}
      style={{
        backgroundColor: '#18181D',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <h1 style={{ 
          fontSize: '2.5rem', 
          display: 'flex',
          gap: '0.5rem'
        }}>
        <span style={{ color: '#FFFFFF', fontWeight: 400 }}>under</span>
        <span style={{ color: '#F7D000', fontWeight: 700 }}>maintenance</span>
      </h1>
    </div>
  );
};

export default MaintenancePage;