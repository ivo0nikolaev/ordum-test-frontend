// In this example we will deploy & interact with psp22 token to transfer some tokens to the owner and get total supply.
import { ApiPromise, Keyring } from "@polkadot/api";
import Contract from "../typechain-generated/contracts/Ordum_Astar";
import { Signer } from "@polkadot/types/types";

// Initializing the contract code
async function main(account:any) {
  // Connect to the local node || change to shibuya later
  const api = await ApiPromise.create();
  

  //To-do
  //1. updating functionality for ordum contract id
  const contract = new Contract("5GsvLRqSSckDPdnySzBob1SeG7ZRz9Z1NiMWyAysdiafq6JA", account, api);
  const query = await contract.query.getIssuerProfile();
  console.log(query.value.unwrap().unwrap());
  return contract;
// main().then(() => {
// 	console.log('done');
// });
}

export default main;
