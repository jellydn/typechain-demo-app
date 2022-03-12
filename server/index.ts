import { ethers } from "ethers";
import express from "express";

import { ITManToken__factory } from "./contracts";

const app = express();

app.get("/api/info", async (_req, res) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://speedy-nodes-nyc.moralis.io/b87b5b56ff659d8dd8a6c229/eth/ropsten"
  );

  // create a new contract factory with our abi
  const itmanToken = ITManToken__factory.connect(
    "0xB97F055793ea5210d3F518F395283E3deFFD43DE",
    provider
  );

  // call some methods on the contract
  const name = await itmanToken.name();
  const totalSupply = await itmanToken.totalSupply();
  const owner = await itmanToken.owner();
  res.json({
    name,
    totalSupply,
    owner,
  });
});

app.listen(3001);
