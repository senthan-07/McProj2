import React, { useState } from "react";
import { ethers, HDNodeWallet, Wallet } from "ethers";

export default function Ether({ seed }) {
    const [ethKeys, setEthKeys] = useState([]);
    const [ethIndex, setEthIndex] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    function deriveEthKeys() {
        if (seed instanceof Buffer) {
            const hdNode = HDNodeWallet.fromSeed(seed);
            const path = `m/44'/60'/${ethIndex}'/0/0`;
            const child = hdNode.derivePath(path);
            const privateKey = child.privateKey;
            const wallet = new Wallet(privateKey);

            const newKeyData = {
                address: wallet.address,
                privateKey: privateKey,
                showPrivateKey: false,
            };

            setEthKeys([...ethKeys, newKeyData]);
            setEthIndex(ethIndex + 1);
        } else {
            console.error("Invalid seed format");
        }
    }

    function togglePrivateKeyVisibility(idx) {
        const updatedKeys = ethKeys.map((key, keyIndex) => {
            if (keyIndex === idx) {
                return {
                    ...key,
                    showPrivateKey: !key.showPrivateKey,
                };
            }
            return key;
        });
        setEthKeys(updatedKeys);
    }

    function toggleOverlay() {
        setShowOverlay(!showOverlay);
    }

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
            <button 
                className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6 transition ease-in-out duration-200"
                onClick={deriveEthKeys}
            >
                Derive Keys for Ethereum
            </button>

            <h2 className="text-3xl font-bold text-center mb-6">Latest Ethereum Wallet</h2>
            {ethKeys.length > 0 && (
                <div className="w-full max-w-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6">
                    <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Public Key:</p>
                        <p className="text-gray-600 dark:text-gray-400 break-all">{ethKeys[ethKeys.length - 1].address}</p>
                    </div>
                    <div className="relative mt-4">
                        <b>Private Key:</b> 
                        {ethKeys[ethKeys.length - 1].showPrivateKey ? ethKeys[ethKeys.length - 1].privateKey : '••••••••'}
                        <button 
                            onClick={() => togglePrivateKeyVisibility(ethKeys.length - 1)} 
                            className="ml-2 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition ease-in-out duration-150"
                        >
                            {ethKeys[ethKeys.length - 1].showPrivateKey ? '👁️' : '👁️‍🗨️'}
                        </button>
                    </div>
                </div>
            )}

            <button 
                className="mt-8 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition ease-in-out duration-200"
                onClick={toggleOverlay}
            >
                View All Wallets
            </button>

            {showOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                    <div className="w-11/12 max-w-3xl bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
                        <button className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition ease-in-out duration-150" onClick={toggleOverlay}>
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">All Ethereum Wallets</h2>
                        {ethKeys.map((key, idx) => (
                            <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-4 mb-4 rounded-lg">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-300">Public Key:</p>
                                    <p className="text-gray-600 dark:text-gray-400">{key.address}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="font-semibold text-gray-800 dark:text-gray-300">Private Key:</p>
                                    <p className="text-gray-600 dark:text-gray-400">{key.showPrivateKey ? key.privateKey : '••••••••'}</p>
                                    <button 
                                        onClick={() => togglePrivateKeyVisibility(idx)} 
                                        className="ml-2 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 transition ease-in-out duration-150"
                                    >
                                        {key.showPrivateKey ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
