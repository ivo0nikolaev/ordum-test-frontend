// In this example we will deploy & interact with psp22 token to transfer some tokens to the owner and get total supply.
import { ApiPromise,Keyring } from "@polkadot/api";
import Contract from "../typechain-generated/contracts/Ordum_Astar";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";


// Initializing the contract code
async function main(account:string|any) {
  // Connect to the local node || change to shibuya later
  const api = await ApiPromise.create();
  const keyring = new Keyring();
  const keyPair = keyring.addFromAddress(account);


  //To-do
  //1. updating functionality for ordum contract id
  const contract = new Contract("5F4E4BPoUk3JjSCMPrzCJZS29xAUWzyGkppR2nVSug14Fb6E", keyPair, api);
  //const query = await contract.query.getIssuerProfile();
  
  return contract;
// main().then(() => {
// 	console.log('done');
// });
}

export default main;
