import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3FromSource,
} from "@polkadot/extension-dapp";

import { stringToHex } from "@polkadot/util";

import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

let SENDER = "";

// Checking if extensaion is intalled

let enablePolkadotExtensionCache: Promise<void>;
export const enablePolkadotExtension = async (): Promise<void> => {
  if (enablePolkadotExtensionCache) return enablePolkadotExtensionCache;

  enablePolkadotExtensionCache = (async () => {
    const { web3Enable } = await import("@polkadot/extension-dapp");
    const extensions = await web3Enable("Ordum");

    if (extensions.length === 0) {
      throw new Error(
        "No extension installed, or the user did not accept the authorization"
      );
    }
  })();

  return enablePolkadotExtensionCache;
};

// Get list of accounts

//Fix the any
const getAccounts = async (): Promise<InjectedAccountWithMeta[]> => {
  await enablePolkadotExtension();
  // console.log(await web3Accounts())
  return await web3Accounts();
};

// Sellect an account - done if FE

// Get a signer signature

const getSigner = async (account: Object): Promise<any> => {
  //@ts-ignore
  const injector = await web3FromSource(account.meta.source);
  //@ts-ignore
  SENDER =  account.address
  const signRaw = injector?.signer?.signRaw;

  if (!!signRaw) {
    // after making sure that signRaw is defined
    // we can use it to sign our message
    const { signature } = await signRaw({
      //@ts-ignore
      address: account.address,
      data: stringToHex("Test Ordum sign up with PJS"),
      type: "bytes",
    });
    
    return signature;
  }
};

// Sign a transaction

export { getAccounts, getSigner };
