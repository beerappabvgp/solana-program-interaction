"use client"
import { FC } from "react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white text-2xl bg-purple-600 p-4 rounded-lg">SOLANA</span>
      <WalletMultiButton />
    </div>
  );
};