import { createPublicClient, http } from "viem";

export const chain = {
  id: 1001,
  name: "Kairos Testnet",
  nativeCurrency: { name: "Kaia", symbol: "KAIA", decimals: 18 },
  rpcUrls: { default: { http: ["https://public-en-kairos.node.kaia.io"] } },
};

export const client = createPublicClient({
  chain,
  transport: http(),
});

export const pixelMapAddress = "0xc7eeD2A4B51ECc8b575f2dBAf5F73448C6dEB837";
export const multicall3Address = "0xcA11bde05977b3631167028862bE2a173976CA11";
