import React, { useEffect } from "react";
import { mnemonicToSeedSync } from "bip39";

export default function Seed({ mnemonic, setSeed }) {
    useEffect(() => {
        if (mnemonic) {
            try {
                const s = mnemonicToSeedSync(mnemonic); // Generate the seed from the mnemonic
                setSeed(s); // Set the seed for further use, but don't display it
            } catch (err) {
                console.error("Error generating seed:", err.message);
            }
        }
    }, [mnemonic, setSeed]); // Effect runs when `mnemonic` changes

    return (
        <div>
            {/* The seed is not displayed, as per your request */}
        </div>
    );
}
