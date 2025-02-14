import { useState, useEffect, useCallback } from 'react';
import { Program, AnchorProvider, Idl} from '@project-serum/anchor';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import IDL from '../idl/hodlhive.json';
import { CollateralAccount } from '../idl/types';

const programId = new PublicKey("ENrm4nyvigMpF9Tqy2urGxrjrumVJfgGDkdRA78QTBR9");

const NetWorthCard = () => {
  const { publicKey, connected } = useWallet();
  const [netWorth, setNetWorth] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleTransactionError = useCallback((err: unknown) => {
    if (err instanceof Error) {
      if (err.message.includes("User rejected the request")) {
        setError("Transaction cancelled");
      } else {
        setError(`Error: ${err.message}`);
      }
    } else {
      setError("Unknown error occurred");
    }
  }, []);

  const initializeCollateralAccount = useCallback(async (program: Program, collateralPda: PublicKey) => {
    try {
      if (!publicKey) throw new Error("Wallet not connected");

      const txSignature = await program.methods
        .initializeCollateral()
        .accounts({
          collateral: collateralPda,
          user: publicKey,
        })
        .rpc();

      console.log("Transaction success:", txSignature);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) { // Исправлено: неиспользуемый параметр заменен на _
      handleTransactionError("Failed to initialize account");
      return false;
    }
  }, [publicKey, handleTransactionError]);

  useEffect(() => {
    if (!publicKey || !connected) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const connection = new Connection("http://127.0.0.1:8899", "confirmed");
        const provider = new AnchorProvider(connection, window.solana, {});
        const program = new Program(IDL as Idl, programId, provider);

        const [collateralPda] = await PublicKey.findProgramAddress(
          [Buffer.from("collateral"), publicKey.toBuffer()],
          program.programId
        );

        try {
          const collateralAccount = await program.account.collateral.fetch(collateralPda) as CollateralAccount;
          setNetWorth(collateralAccount.collateral_value);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) { // Исправлено: неиспользуемый параметр
          const initialized = await initializeCollateralAccount(program, collateralPda);
          if (!initialized) return;
          
          const newAccount = await program.account.collateral.fetch(collateralPda) as CollateralAccount;
          setNetWorth(newAccount.collateral_value);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) { // Исправлено: неиспользуемый параметр
        handleTransactionError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [publicKey, connected, initializeCollateralAccount, handleTransactionError]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="bg-[#181818] rounded-3xl p-10 w-full max-w-5xl shadow-md border border-[#181818]">
        <h2 className="text-xl font-bold text-center mb-4">Soon</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="text-3xl text-center">${netWorth.toLocaleString()}</div>
        )}
      </div>
    </div>
  );
};

export default NetWorthCard;