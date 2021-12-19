import React from "react";
import "./App.css";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <main>
      <OrderSummary />

      <div className="absolute bottom-0 text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <span className="underline">Dan-5150</span>.
      </div>
    </main>
  );
}

export default App;
