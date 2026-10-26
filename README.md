# Media Verification (Base Sepolia testnet PoC) - Phase 1.5

Live: https://elpisai7.github.io/media-verification-app/

- **Stamp:** sign in with a free Coinbase smart wallet (passkey, no MetaMask), or use MetaMask. Your file is fingerprinted (SHA-256) on your device and is never uploaded.
- **Verify:** drop any copy to check it against the on-chain record. No wallet needed.
- Contract: [`0x09644C52BCcF590d47c84227D02574dA331b45fe`](https://sepolia.basescan.org/address/0x09644C52BCcF590d47c84227D02574dA331b45fe) on Base Sepolia.
- `config.js` holds runtime settings. Set `paymasterUrl` to a CDP Paymaster (Base Sepolia) endpoint or proxy to sponsor gas.
- `phase1.html` is the original MetaMask-only Phase 1 page.

This is a built copy of the `app/` folder in the private source repo. It proves a file is unchanged since it was stamped and which account stamped it. It does not prove who created it or that a camera captured it. Testnet only, evidence only, not legal advice.
