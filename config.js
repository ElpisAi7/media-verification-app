// =====================================================================
// Runtime settings for the Media Verification app.
// You can edit this ONE file straight on github.com (even from a phone)
// and GitHub Pages will pick it up. No rebuild needed.
// =====================================================================
window.MV_CONFIG = {
  // The MediaRegistry contract already deployed on Base Sepolia (do not change unless you redeploy).
  contractAddress: "0x09644C52BCcF590d47c84227D02574dA331b45fe",

  // Your Coinbase Developer Platform (CDP) Project ID, from https://portal.cdp.coinbase.com
  // (project home / Settings). It looks like a UUID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  // It is NOT a secret and NOT an API key, so it is fine in this public file.
  // While it is "", email sign-in is off (Verify and MetaMask still work).
  // Gas is sponsored by CDP's built-in paymaster (useCdpPaymaster), so there is
  // no paymaster URL to set. Also add this site's domain in CDP Portal → Embedded Wallets → Domains (see PHASE15.md).
  projectId: "aa64e296-48cd-46e5-ba25-6840b9319996"
};
