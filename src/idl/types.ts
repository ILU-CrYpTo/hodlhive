import { PublicKey } from '@solana/web3.js';

export type CollateralAccount = {
  user: PublicKey;
  meme_coins: PublicKey[];
  collateral_value: number;
  ltv_ratio: number;
};