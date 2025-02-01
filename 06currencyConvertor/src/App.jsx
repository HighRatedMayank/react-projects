import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // ✅ Convert function properly defined
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  // ✅ Swap currencies & recalculate conversion
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* ✅ InputBox for 'From' currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // ✅ Set 'from' currency
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* ✅ InputBox for 'To' currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // ✅ Set 'to' currency
                selectCurrency={to} // ✅ Corrected from 'from' to 'to'
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
