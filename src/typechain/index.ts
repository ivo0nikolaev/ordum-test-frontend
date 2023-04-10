import { ApiPromise,Keyring, WsProvider } from "@polkadot/api";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { ContractPromise } from "@polkadot/api-contract";
import metadata from "../components/metadata/Ordum_Astar.json"
import Contract from "../typechain-generated/contracts/Ordum_Astar";
import { web3FromAddress } from "@polkadot/extension-dapp";
// TO DO ***************** TO DO ********************** TO DO*********************

// Make a component use it in settings page, so that we can be able to update some entities
// Initializing the contract code
async function main(account:InjectedAccountWithMeta) {

  // We are getting the account from injected account and creating a pair to sign directly
  // Connect to the local node || change to shibuya later
  //const ws_provider = new WsProvider("wss://rpc.shibuya.astar.network");
  const api = await ApiPromise.create();
  const keyring = new Keyring();

  const keyringPair = keyring.addFromUri("//Alice")
  const contract_id: string = "0x66bafc8d9a852465b8404416c54a81afaba8aa50aad443414b22aaefc05a5ee0"
  //To-do
  const contract = new Contract(contract_id, keyringPair,api);
  
  
  

  
  
  return contract;
}

export default main;
