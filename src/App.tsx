import React from "react";
import "./App.css";
import OrderSummary from "./components/OrderSummary";
import DesktopBackground from "./assets/images/pattern-background-desktop.svg";
import MobileBackground from "./assets/images/pattern-background-mobile.svg";

function App() {
  return (
    <main>
      <img src={DesktopBackground} alt="Background" className="w-full hidden md:block" />
      <img src={MobileBackground} alt="Background" className="w-full block md:hidden" />

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
