import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://solana-mainnet.g.alchemy.com/v2/-saGnFfNazoazoib9pWpBn2ie3fDeVV_', 'confirmed');

export async function getSolanaBalance(publicKey) {
  const balance = await connection.getBalance(new PublicKey(publicKey));
  return balance / 1e9; // Convert lamports to SOL
}
