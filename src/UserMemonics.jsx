import React, { useState } from "react";

export default function UserMemonics() {
    const [mnemonic, setMnemonic] = useState("");
    function handleInputChange(event) {
        const newMnemonic = event.target.value;
        setMnemonic(newMnemonic);
    }

    return (
        <div>
            <input
                type="text"
                value={mnemonic}
                onChange={handleInputChange}
                placeholder="Enter your mnemonic here"
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
        </div>
    );
}
