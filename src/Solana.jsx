import React, { useState } from "react";
import { derivePath } from "ed25519-hd-key";
import { Keypair as SolanaKeypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export default function Solana({ seed }) {
    const [solanaKeys, setSolanaKeys] = useState([]);
    const [index, setIndex] = useState(0);

    function deriveSolanaKeys() {
        if (Buffer.isBuffer(seed)) {
            const path = `m/44'/501'/${index}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keyPair = SolanaKeypair.fromSecretKey(secret);
            
            const newKeyData = {
                publicKey: keyPair.publicKey.toBase58(),
                privateKey: keyPair.secretKey.toString('hex'),
                showPrivateKey: false // Initially, private key is hidden
            };

            setSolanaKeys([...solanaKeys, newKeyData]);
            setIndex(index + 1); // Increment index for next key
        } else {
            console.error("Invalid seed format");
        }
    }

    function togglePrivateKeyVisibility(idx) {
        const updatedKeys = solanaKeys.map((key, keyIndex) => {
            if (keyIndex === idx) {
                return {
                    ...key,
                    showPrivateKey: !key.showPrivateKey // Toggle visibility
                };
            }
            return key;
        });
        setSolanaKeys(updatedKeys);
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <button 
                className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-4 py-2 mb-6"
                onClick={deriveSolanaKeys}
            >
                Generate Solana Wallet
            </button>
            <h2 className="text-3xl font-bold text-center mb-8">Solana Public Keys</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {solanaKeys.map((key, idx) => (
                    <div key={idx} className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-600">
                        <div className="flex flex-col gap-4">
                            <div className="text-center">
                                <button 
                                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                                    onClick={() => togglePrivateKeyVisibility(idx)}
                                >
                                    {key.showPrivateKey ? 'Hide Private Key' : 'Show Private Key'}
                                </button>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200">Public Key:</p>
                                <p className="text-gray-600 dark:text-gray-400 break-all">{key.publicKey}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200">Private Key:</p>
                                <p className="text-gray-600 dark:text-gray-400 break-all">
                                    {key.showPrivateKey ? key.privateKey : '••••••••'}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
