import { ethers } from "ethers";

import { ITManToken__factory } from "./contracts";

const DemoApp = () => {
  const onClick = () => {
    console.log("Checking status...");
    const provider = new ethers.providers.JsonRpcProvider(
      "https://speedy-nodes-nyc.moralis.io/b87b5b56ff659d8dd8a6c229/eth/ropsten"
    );

    // create a new contract factory with our abi
    const itmanToken = ITManToken__factory.connect(
      "0xB97F055793ea5210d3F518F395283E3deFFD43DE",
      provider
    );

    itmanToken
      .balanceOf("0xB97F055793ea5210d3F518F395283E3deFFD43DE")
      .then(console.log)
      .catch(console.error);

    // call some methods on the contract
    itmanToken.name().then(console.log).catch(console.error);
    itmanToken.totalSupply().then(console.log).catch(console.error);
    itmanToken.owner().then(console.log).catch(console.error);
  };
  return (
    <>
      <div className="bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-1s">
            Typechain Demo App
          </div>
          <div className="op30 text-lg fw300 m1">IT Man Token - Info</div>
          <div className="max-w-md mx-auto">
            <button
              onClick={onClick}
              type="button"
              className="btn-green uppercase mt-8"
            >
              Check status
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 right-0 left-0 text-center op30 fw300">
          Please open your browser console to see the result.
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div>
      <DemoApp />
    </div>
  );
}

export default App;
