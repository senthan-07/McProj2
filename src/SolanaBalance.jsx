import React, { useState } from 'react';
import { getSolanaBalance } from '../utils/solana';
import './index.css';

function SolanaBalance() {
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState(null);

  const handleFetchBalance = async () => {
    try {
      const balanceInSol = await getSolanaBalance(publicKey);
      setBalance(balanceInSol);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder="Enter Solana Public Key"
        className="border p-2 mb-2"
      />
      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
      onClick={handleFetchBalance}>Get Balance</button>
      {balance !== null && <p className="mt-2">Balance: {balance} SOL</p>}
    </div>
  );
}

export default SolanaBalance;
