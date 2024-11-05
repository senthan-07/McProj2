Custom Web Wallet
This is a simple Web Wallet application built with React. It allows users to generate or enter a mnemonic phrase to interact with wallets on the Solana and Ethereum blockchains. The app also displays the balances of the respective wallets.

Features
Generate Mnemonic: Create a new mnemonic phrase that can be used to generate wallet keys.
Enter Mnemonic: Enter an existing mnemonic to restore or access a wallet.
Wallets: View the generated wallet's addresses for Solana and Ethereum, along with their current balances.
Blockchain Balances: Display the current balance of the wallets for both Solana and Ethereum.
Responsive Design: The app is designed to be fully responsive for both desktop and mobile devices.
Project Structure
The app is organized into the following components:

App.jsx: The main component that handles routing and renders different views.
Mnemonic.jsx: Component to generate a new mnemonic phrase.
UserMemonics.jsx: Component to input an existing mnemonic phrase.
Seed.jsx: Component that derives a seed from the mnemonic.
Solana.jsx: Component that interacts with the Solana blockchain.
Ether.jsx: Component that interacts with the Ethereum blockchain.
SolanaBalance.jsx: Component that fetches and displays the Solana wallet balance.
EtherBalance.jsx: Component that fetches and displays the Ethereum wallet balance.
Home.jsx: The home page, which acts as a dashboard or landing page.
Prerequisites
Before running the project, ensure that you have the following software installed:

Node.js (preferably the latest LTS version)
npm or yarn (Node package manager)
Getting Started
1. Clone the repository
git clone https://github.com/senthan-07/McProj2.git
cd McProj2
2. Install dependencies
Run the following command to install the required dependencies:
Copy code
npm install
# or
yarn install

3. Run the app
Start the development server to run the app locally:

Copy code
npm start
# or
yarn start
or 
npm run dev
Your web wallet app should now be running at http://localhost:3000.

4. Usage
Once the app is running, open it in your browser. Here’s a quick guide to what you can do:

Create mnemonic first and create wallet wont work until u create mnemonic 
after creating mnemonic just follow the right commands in nav bar
Generate Mnemonic: Click this to generate a new mnemonic phrase.
Enter Mnemonic: If you have an existing mnemonic, you can enter it here to recover your wallet.
Wallets: Once you have a mnemonic (either generated or entered), you'll be able to view the wallet for both Solana and Ethereum and check their balances.
5. Wallets

Libraries and Tools
React: Frontend framework for building the UI components.
React Router: For routing between pages and managing the application’s navigation.
Tailwind CSS: Utility-first CSS framework used for styling the app.
ethers.js: A library used to interact with the Ethereum blockchain.
@solana/web3.js: The official JavaScript API to interact with the Solana blockchain.
Bip39: A library to handle the generation and validation of mnemonics.
Additional Notes
Security: Mnemonic phrases and seeds are sensitive information. Always store them securely. This app does not provide a way to securely store mnemonics, so be cautious when using it with real funds.
Cross-Chain Compatibility: This app supports Solana and Ethereum wallets, but additional blockchains can be integrated by following similar patterns used for Solana and Ethereum.
License
This project is licensed under the MIT License - see the LICENSE file for details.