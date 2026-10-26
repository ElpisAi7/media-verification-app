// =====================================================================
// Runtime settings for the Media Verification app.
// You can edit this ONE file straight on github.com (even from a phone)
// and GitHub Pages will pick it up. No rebuild needed.
// =====================================================================
window.MV_CONFIG = {
  // The MediaRegistry contract already deployed on Base Sepolia (do not change unless you redeploy).
  contractAddress: "0x09644C52BCcF590d47c84227D02574dA331b45fe",

  // Gas sponsorship (optional). Leave "" and users pay their own (tiny) testnet gas.
  // To sponsor gas so users need NO ETH, paste your Coinbase Developer Platform (CDP)
  // Paymaster endpoint for Base Sepolia here, e.g.
  //   "https://api.developer.coinbase.com/rpc/v1/base-sepolia/<YOUR_CLIENT_API_KEY>"
  // or, better, the URL of a small proxy that hides that key (see PHASE15.md).
  // In CDP, allowlist ONLY the MediaRegistry contract + its stamp() function and set
  // a per-user limit, because anything in this file is publicly visible.
  paymasterUrl: ""
};
