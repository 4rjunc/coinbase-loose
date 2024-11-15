// @ts-nocheck
"use client";

import { useState } from "react";
import {
  Checkout,
  CheckoutButton,
  CheckoutStatus,
} from "@coinbase/onchainkit/checkout";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Name, EthBalance } from "@coinbase/onchainkit/identity";
import ImageSvg from "./svg/Image";
import {
  Address,
  Avatar,
  Badge,
  Identity,
  Socials,
} from "@coinbase/onchainkit/identity";
import { base } from "viem/chains";
const components = [
  {
    name: "Transaction",
    url: "https://onchainkit.xyz/transaction/transaction",
  },
  { name: "Swap", url: "https://onchainkit.xyz/swap/swap" },
  { name: "Checkout", url: "https://onchainkit.xyz/checkout/checkout" },
  { name: "Wallet", url: "https://onchainkit.xyz/wallet/wallet" },
  { name: "Identity", url: "https://onchainkit.xyz/identity/identity" },
];

const templates = [
  { name: "NFT", url: "https://github.com/coinbase/onchain-app-template" },
  {
    name: "Commerce",
    url: "https://github.com/coinbase/onchain-commerce-template",
  },
  { name: "Fund", url: "https://github.com/fakepixels/fund-component" },
];

const productIds = [
  "cf9da605-6b2f-4bb5-97ea-2816717fd6f2",
  "50ca2e2f-1aad-44b5-be47-07dfeed4d808",
  "88bf34d5-4dd8-4f89-81f9-976520fabcfc",
];

export default function App() {
  const [productId, setProductId] = useState(productIds[0]);

  const handleRandomizeProduct = () => {
    const randomIndex = Math.floor(Math.random() * productIds.length);
    setProductId(productIds[randomIndex]);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full p-4">
          <div className="w-1/3 mx-auto mb-6">
            <ImageSvg />
          </div>
          <div className="w-full flex justify-center">
            <Identity
              address="0x4bEf0221d6F7Dd0C969fe46a4e9b339a84F52FDF"
              schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
              chain={base}
            >
              <Avatar />
              <Name>
                <Badge />
              </Name>
              <Address />
              <Socials />
            </Identity>
          </div>
          <h2 className="text-nowrap  text-center text-3xl">
            Buy Random Things and loose your money
          </h2>

          <div className="flex flex-col items-center">
            <div className="max-w-2xl w-full">
              <div className="flex flex-col md:flex-row justify-between mt-4">
                <Checkout productId={productId}>
                  <CheckoutButton
                    coinbaseBranded
                    onClick={handleRandomizeProduct}
                  />
                  <CheckoutStatus />
                </Checkout>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
