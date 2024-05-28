"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { FC, useState } from "react";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";

export const PingButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [signature, setSignature] = useState("");

  const onClick = () => {
    if (!connection || !publicKey) {
      return;
    }
    const programId = new PublicKey(
      "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa"
    );
    const programDataAccount = new PublicKey(
      "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod"
    );
    const instruction = new TransactionInstruction({
      keys: [
        {
          pubkey: programDataAccount,
          isSigner: false,
          isWritable: true,
        },
      ],
      programId,
    });
    const transaction = new web3.Transaction();
    transaction.add(instruction);
    sendTransaction(transaction, connection).then((sig) => setSignature(sig));
  };

  return (
    <>
      <div onClick={onClick}>
        <button className="bg-teal-500 p-4 border-2 rounded-lg w-80 text-xl mt-6">
          Ping!
        </button>
      </div>
      {signature && 
        <a className="bg-gray-300 p-4 mt-6 rounded-lg" href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}>{signature}</a>
      }
    </>
  );
};
