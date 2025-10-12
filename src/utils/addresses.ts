export const StableCoinFactories = {
  1: "0x0000000000000000000000000000000000000000", // Ethereum Mainnet - Update with actual address
  137: "0x0000000000000000000000000000000000000000", // Polygon - Update with actual address
  56: "0x0000000000000000000000000000000000000000", // BSC - Update with actual address
  8453: "0x0000000000000000000000000000000000000000", // Base - Update with actual address
  11155111: "0x0000000000000000000000000000000000000000", // Sepolia Testnet - Updated with deployed address
  61: "0x0000000000000000000000000000000000000000", // Ethereum Classic - Update with actual address
} as {
  [key: number]: `0x${string}`;
};
