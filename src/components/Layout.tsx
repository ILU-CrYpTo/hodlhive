import Link from 'next/link';
import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#181818] p-5">
        <div className="max-w-screen-xl max-h-screen-xl mx-auto flex justify-between items-center fontFamily: 'Inclusive Sans, sans-serif'">
          <div className="flex items-center gap-2">
          <Image 
              src="/favicon.png" 
              alt="Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <nav className="flex space-x-6 px-16 text-[#FFFFFF]">
              <Link href="/dashboard" className="tracking-wider px-6 hover:text-white">Dashboard</Link>
              <Link href="/portfolio" className="tracking-wider px-6 hover:text-white">Portfolio</Link>
              <Link href="#" className="tracking-wider px-6 hover:text-white">More</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4 px-32 gap-2">
            <button className="border border-[#F7D000] text-[#F7D000] px-4 py-1 rounded-full 
                           hover:bg-[#F7D000] hover:text-black transition-colors font-regular">
              Switch tokens
            </button>

            <button
              onClick={() => setVisible(true)}
              className="bg-[#F7D000] hover:bg-[#FFE55C] text-black px-4 py-1 rounded-full 
                       hover:bg-yellow-400 transition-colors font-semibold"
            >
              {connected && publicKey 
                ? formatAddress(publicKey.toBase58())
                : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="max-w-screen-xl max-h-screen-xl mx-auto py-6 mt-36">
          {/* Ваш контент */}
          {children}
        </section>
      </main>

      <footer className="bg-[#1B1B1B] p-4 border-t border-[#888888] mt-8">
        <div className="max-w-screen-xl max-h-screen-xl mx-auto text-left text-[#888888] text-sm font-sans">
          <div className="flex justify-left gap-6 mb-2">
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Docs</Link>
            <Link href="#" className="hover:text-white">FAQs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};