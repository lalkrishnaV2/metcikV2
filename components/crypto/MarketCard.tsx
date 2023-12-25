import React, { useState } from "react";

const MarketCard = () => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [amount, setAmount] = useState("");

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleLoadWallet = () => {
    // Implement the logic to load the wallet based on the selected coin and amount
    console.log(`Load wallet for ${amount} ${selectedCoin}`);
  };

  return (
    <div className="group relative flex h-[260px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all hover:shadow-lg md:min-h-[250px] md:max-w-[360px] sm:h-[150px] sm:max-h-[150px]">
      <div className="flex-center flex-grow bg-gray-200 bg-cover bg-center text-black">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold">Wallet 0</div>
          <div className="mt-2 text-sm">Wallet address: dlw3nd..sf3x</div>
        </div>
      </div>

      <div className="flex h-240 sm:h-[100px] md:h-[180px]  flex-col gap-3 p-5 md:gap-4 sm:h-70">
        <div className="mb-3 flex items-center">
          {/* Your Stocks text input */}
          <input
            type="text"
            placeholder="Choose coin"
            value={selectedCoin}
            style={{ width: "120px" }}
            readOnly
            className="p-medium-1 md:p-medium-1 text-gray-900 mb-2 border-b border-gray-300 mr-2 font-semibold"
          />
          {/* Your Stocks drop-down */}
          <select
            className="p-semibold-14 w-min rounded-full bg-blue-100 px-4 py-1 text-blue-800"
            onChange={handleCoinChange}
            value={selectedCoin}
          >
            <option disabled value="">
              Your Coins
            </option>
            <option value="coin 1">coin 1</option>
            <option value="coin 2">coin 2</option>
            <option value="coin 3">coin 3</option>
            <option value="coin 4">coin 4</option>
            <option value="coin 5">coin 5</option>
          </select>
        </div>

        {/* Input for amount */}
        <input
          type="text"
          className="p-medium-16 p-medium-18 text-gray-500 mb-2 border-b border-gray-300"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Load Wallet button */}
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleLoadWallet}
        >
          Load Wallet
        </button>
      </div>
    </div>
  );
};

export default MarketCard;
