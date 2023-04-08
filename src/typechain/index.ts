// In this example we will deploy & interact with psp22 token to transfer some tokens to the owner and get total supply.
import { ApiPromise,Keyring } from "@polkadot/api";
import Contract from "../typechain-generated/contracts/Ordum_Astar";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ContractPromise } from "@polkadot/api-contract";
import metadata from "../typechain-generated/data/Ordum_Astar.json"

// Initializing the contract code
async function main(account:string|any) {

  // We are getting the account from injected account and creating a pair to sign directly
  // Connect to the local node || change to shibuya later
  const api = await ApiPromise.create();
  


  //To-do
  const contract = new ContractPromise(api, metadata,account);
  
  
  return contract;
// main().then(() => {
// 	console.log('done');
// });
}

export default main;
