import React, { useState } from "react";
import { generateMnemonic } from "bip39"; // Ensure bip39 is correctly installed
import "./Memonics.css"; // Include custom CSS for additional styles

export default function Mnemonic({ mnemonic, setMnemonic }) {
    const [mnemonicPhrase, setMnemonicPhrase] = useState("");

    function generateMnemonicHandler() {
        try {
            const mn = generateMnemonic(); // Generates the mnemonic
            setMnemonic(mn); // This triggers the seed generation in the Seed component
            setMnemonicPhrase(mn); // Store the entire mnemonic
            displayMnemonicInGrid(mn); // Pass the mnemonic string directly
        } catch (error) {
            console.error("Error generating mnemonic:", error);
        }
    }

    function displayMnemonicInGrid(mnemonic) {
        const words = mnemonic.split(" "); // Split the mnemonic into words
        const gridContainer = document.getElementById("mnemonic-grid");

        // Clear existing grid items
        gridContainer.innerHTML = "";

        words.forEach((word) => {
            const gridItem = document.createElement("div");
            gridItem.textContent = word;
            gridItem.className = "grid-item"; // Use a class to apply styles
            gridContainer.appendChild(gridItem);
        });
    }

    function copyMnemonicToClipboard() {
        navigator.clipboard.writeText(mnemonicPhrase).then(() => {
            alert("Mnemonic copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy mnemonic: ", err);
        });
    }

    return (
        <div className="mnemonic-container">
            <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-lg px-3 py-1.5 mb-2"
                onClick={generateMnemonicHandler}
            >
                Create Mnemonic
            </button>
            <h2 className="text-white font-bold mt-4">Mnemonic</h2>
            <div id="mnemonic-grid" className="mnemonic-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", width: "100%" }}>
                {/* Grid items will be dynamically inserted here */}
            </div>
            {mnemonicPhrase && (
                <button
                    className="bg-green-500 hover:bg-green-400 text-white font-medium rounded-lg px-3 py-1.5 mt-2"
                    onClick={copyMnemonicToClipboard}
                >
                    Copy Entire Mnemonic
                </button>
            )}
        </div>
    );
}
