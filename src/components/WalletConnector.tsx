import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Изменено на default export
export default function WalletConnector() {
  const { connected, connecting } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();

  useEffect(() => {
    if (connected && !connecting) {
      router.push('/dashboard');
    }
  }, [connected, connecting, router]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="bg-[#181818] rounded-3xl p-10 w-full max-w-5xl shadow-md border border-[#181818]">
        <div className="flex justify-center mb-4">
          <Image 
            src="/bee-icon.png" 
            alt="Bee Icon" 
            width={100} 
            height={100}
            priority
          />
        </div>

        <h2 className="text-xl font-semibold text-white text-center">
          Please, connect your wallet
        </h2>

        <p className="text-[#888888] text-md text-center mt-2">
          Please connect your wallet to see your supplies, borrowings, and open positions.
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisible(true)}
            className="bg-[#F7D000] text-black font-semibold rounded-2xl px-8 py-2 text-lg
                     hover:scale-105 transition-transform duration-200 shadow-lg mt-2"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}