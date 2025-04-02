// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
// import type { AppProps } from 'next/app';
// import { clusterApiUrl } from '@solana/web3.js';
// import { useMemo } from 'react';
// import { Layout } from '../components/Layout';
// import '../styles/globals.css';

// // Важные стили для модалки
// import '@solana/wallet-adapter-react-ui/styles.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   const network = WalletAdapterNetwork.Devnet;
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
//   const wallets = useMemo(
//     () => [
//       new PhantomWalletAdapter(),
//       new SolflareWalletAdapter(),
//     ],
//     []
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

// export default MyApp;


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