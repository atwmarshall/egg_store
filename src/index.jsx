import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the CSS file for styling
import EggPurchaseApp from "./EggPurchaseApp"; // Import the main component

const root = ReactDOM.createRoot(document.getElementById("root")); // Find the root div in index.html
root.render(
    <React.StrictMode>
        <EggPurchaseApp />
    </React.StrictMode>
);