// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mnemonic from "./Memonics.jsx";
import UserMemonics from "./UserMemonics.jsx";
import Seed from "./Seed.jsx";
import Solana from "./Solana.jsx";
import Ether from "./Ether.jsx";
import './index.css';
import SolanaBalance from "./SolanaBalance.jsx";
import EtherBalance from "./EtherBalance.jsx";
import Home from "./Home.jsx";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [seed, setSeed] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Web Wallet</h1>
            <nav className="space-x-4">
              <Link to="/" className="text-blue-400 hover:underline">Home</Link>
              <Link to="/generate-mnemonic" className="text-blue-400 hover:underline">Generate Mnemonic</Link>
              <Link to="/enter-mnemonic" className="text-blue-400 hover:underline">Enter Mnemonic</Link>
              <Link to="/wallets" className="text-blue-400 hover:underline">Wallets</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/generate-mnemonic" element={<Mnemonic mnemonic={mnemonic} setMnemonic={setMnemonic} />} />
            <Route path="/enter-mnemonic" element={<UserMemonics mnemonic={mnemonic} setMnemonic={setMnemonic} />} />
            <Route path="/wallets"  element={
                <div>
                  <Seed mnemonic={mnemonic} seed={seed} setSeed={setSeed} />
                  <Solana seed={seed} />
                  <Ether seed={seed} />
                </div>
              }  />
            <Route path="/solana-balance" element={<SolanaBalance />} />
            <Route path="/ether-balance" element={<EtherBalance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
