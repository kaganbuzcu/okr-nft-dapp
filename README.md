# NFT Minting dApp for OKR
This a complete example of fullstack NFT minting dApp.

## Demo
[https://okr-nft-dapp.vercel.app](https://okr-nft-dapp.vercel.app)

[Contract](https://goerli.etherscan.io/address/0x0568CB91064a34B28750920470d1dee3c9a94936#readContract)

[Opensea](https://testnets.opensea.io/collection/adessiokr)

## Installation

```bash
  git clone https://github.com/kaganbuzcu/okr-nft-dapp.git
  cd okr-nft-dapp
  npm install
  npm run dev
```

Use **Your Own Smart Contract:**

* Change `.env` with your own environment variables.
* Remove `/artifacts` folder if it exists.
* Put your own smart contract inside `/contracts/`.
* Compile your smart contract with `npx hardhat compile`.
* Update `/scripts/deploy.js`according to your needs.
* Deploy your smart contract with `npx hardhat run scripts/deploy.js --network goerli`.
* Copy the deployed _contract address_ and put it inside `/utils/interact.js` contractAddress section.

## Tech Stack

React, TailwindCSS, web3, Alchemy, NextJS, Hardhat

## References
* [TestNet](https://goerli.net/)
* [Artwork](https://www.figma.com/file/GXTdBLDLiuHCsjn8ZNUlvn/NFT-Collection-Design-System-(Community)?node-id=1%3A60&t=axGysB71trgxzeCo-0)
* [Guide](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13)