import React, { useState } from "react";
import { ethers } from "ethers";

export default function EtherBalance() {
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(""); // Replace with the Ethereum address

    async function getEthereumBalance() {
        try {
            // Connect to the Ethereum mainnet
            const provider = new ethers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/-saGnFfNazoazoib9pWpBn2ie3fDeVV_'); // Replace with your Infura or other provider URL
            const balance = await provider.getBalance(address);
            setBalance(ethers.formatEther(balance)); // Convert balance to ETH
            setError(null);
        } catch (err) {
            setError(`Error fetching balance: ${err.message}`);
            setBalance(null);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Ethereum Public Key"
                className="border p-2 mb-2"
            />
            <button
                onClick={() => getEthereumBalance()}
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
            >
                Get Balance
            </button>
            {balance !== null && <p>Balance: {balance} ETH</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
