import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const EggPurchaseApp = () => {
    const [numEggs, setNumEggs] = useState(1);
    const [showThankYou, setShowThankYou] = useState(false);
    const [purchaseMessage, setPurchaseMessage] = useState("");

    const handlePurchase = () => {
        setPurchaseMessage(`Thank you for your purchase, your account is now £${(0.5 * numEggs).toFixed(2)} lighter.`);
        setShowThankYou(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {!showThankYou ? (
                <div className="w-full max-w-md p-6 shadow-xl bg-white rounded-2xl">
                    <h1 className="text-xl font-bold mb-4">Buy Eggs</h1>
                    <div className="mb-4">
                        <label htmlFor="numEggs" className="block text-sm font-medium mb-2">
                            Number of Eggs:
                        </label>
                        <select
                            id="numEggs"
                            className="w-full border rounded p-2"
                            value={numEggs}
                            onChange={(e) => setNumEggs(Number(e.target.value))}
                        >
                            <option value={1}>1</option>
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                            Card Number:
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full border rounded p-2"
                            required
                            inputMode="numeric"
                            autoComplete="cc-number"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="expiryDate" className="block text-sm font-medium mb-2">
                            Expiry Date:
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            className="w-full border rounded p-2"
                            required
                            autoComplete="cc-exp"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                            CVC:
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            className="w-full border rounded p-2"
                            required
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            placeholder="123"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white rounded py-2" onClick={handlePurchase}>
                        Go
                    </button>
                </div>
            ) : (
                <div className="w-full max-w-md p-6 shadow-xl bg-white rounded-2xl">
                    <h1 className="text-xl font-bold mb-4">Thank You</h1>
                    <p className="mb-4">Thank you for buying {numEggs} eggs.</p>
                    <button className="w-full bg-blue-500 text-white rounded py-2" onClick={() => setShowThankYou(false)}>
                        Return to Shop
                    </button>
                </div>
            )}
            {purchaseMessage && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border rounded shadow-lg p-4">
                    {purchaseMessage}
                </div>
            )}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EggPurchaseApp />);
