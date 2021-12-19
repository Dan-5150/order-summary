import React from "react";

import "./OrderSummary.css";
import Hero from "../assets/images/illustration-hero.svg";
import MusicIcon from "../assets/images/icon-music.svg";

const OrderSummary = () => {
  return (
    <div
      className="card flex flex-col justify-content-center m-auto bg-white w-1/3 min-w-[340px] max-w-[400px] rounded-2xl text-center shadow-xl
    "
    >
      <img src={Hero} alt="Hero" className="rounded-t-2xl" />

      <div className="bg-white rounded-2xl p-6 pt-8">
        <h1 className="text-2xl font-black text-dark-blue mb-5">
          Order Summary
        </h1>
        <p className="text-desaturated-blue mb-5 font-medium">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="bg-very-pale-blue flex p-4 mb-5 rounded-xl">
          <img src={MusicIcon} alt="Music Icon" className="mr-4" />
          <div>
            <h6 className="font-bold text-dark-blue">Annual Plan</h6>
            <p className="text-desaturated-blue font-medium">$59.99/year</p>
          </div>
          <button
            className="
              change-btn flex-auto text-bright-blue underline font-bold text-sm text-end self-center hover:no-underline hover:text-desaturated-blue
            "
          >
            Change
          </button>
        </div>

        <div className="flex flex-col justify-content-center">
          <button
            className="bg-bright-blue shadow-lg shadow-desaturated-blue text-white p-4 rounded-xl
            text-sm mb-6 font-semibold hover:bg-hover-blue
          "
          >
            Proceed to Payment
          </button>
          <button className="bg-transparent text-sm font-bold text-desaturated-blue mb-2 hover:text-dark-blue">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
