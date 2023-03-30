import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from "@polkadot/extension-dapp";

import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

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
let getAccounts = async (): Promise<any[]> =>{
    await enablePolkadotExtension();
    // console.log(await web3Accounts())
    return await web3Accounts();
}


// Sellect an account



 export default getAccounts;
