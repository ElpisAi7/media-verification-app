# Media Verification App (testnet PoC)

Single-page app for the Media Verification proof of concept. It hashes a file
(SHA-256) **locally in your browser** — the file is never uploaded — and lets you:

- **Stamp**: record the file's fingerprint, title, version and claim on-chain with your wallet (MetaMask).
- **Verify**: drop in any copy of a file and check whether that exact fingerprint has been stamped. No wallet needed.

**Live app:** https://elpisai7.github.io/media-verification-app/

## Details

- Network: **Base Sepolia testnet** (chain id 84532) — test ETH only, no real value.
- MediaRegistry contract: [`0x09644C52BCcF590d47c84227D02574dA331b45fe`](https://sepolia.basescan.org/address/0x09644C52BCcF590d47c84227D02574dA331b45fe)
- Source contract, tests and docs live in the main (private) repo: [ElpisAi7/media-verification](https://github.com/ElpisAi7/media-verification)

⚠️ This is a **testnet proof of concept**, not production software and not legal advice.
An on-chain stamp is evidence that a file existed at a point in time; it does not by itself prove
authorship or that footage came from a real camera.
