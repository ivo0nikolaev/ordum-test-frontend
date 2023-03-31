import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { getAccounts, getSigner } from "../../wallets/polkadotjs/polkadotjs";

import { ApiPromise, Keyring } from "@polkadot/api";
import Constructors from "../../typechain-generated/constructors/Ordum_Astar";
import Contract from "../../typechain-generated/contracts/Ordum_Astar";
import { SetStateAction, useEffect, useState } from "react";

const HomePage = () => {
  useEffect(() => {
    async function getPJS() {
      let i = await getAccounts();
      //@ts-ignore
      setWallets(i);
      setWallet(i[0].address);
    }
    getPJS();
  }, []);

  const [checked, setChecked] = useState(0);
  const [wallets, setWallets] = useState([]);
  const [wallet, setWallet] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setteamDescription] = useState("");
  const [teamSize, setTeamSize] = useState("1");

  console.log(wallets);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    setTeamName(enteredValue);
  };

  const handleTeamDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const enteredValue = event.target.value;
    setteamDescription(enteredValue);
  };

  const handleTeamSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    setTeamSize(enteredValue);
  };

  // const { user } = useSelector((state) => state.user);
  // const { user } = useSelector((state: RootState) => state.user);
  // console.log(user)
  // const user = useSelector((state) => state.user);
  return (
    <div className="flex flex-col">
      <h1>Home Page</h1>
      {/* {user.isLogged ? (
        <div>
          <p>User: {user?.name}</p>
        </div>
      ) : (
        <p>User not logged</p>
      )} */}
      <div>
        <p> Select an account</p>
        <div className="flex flex-col m-2 p-1 border  ">
          {
            //@ts-igonre
            wallets.length === 0 ? (
              <div>
                <p>You don't seem to have PolkadotJS installed. </p>
                <p>Please install it and make create a wallet </p>
              </div>
            ) : (
              //@ts-igonre
              wallets.map((wallet, i) => (
                //@ts-ignore
                <div className="mt-1">
                  <input
                    className="mr-2"
                    type="radio"
                    value={
                      //@ts-ignore
                      wallet.address
                    }
                    key={i}
                  
                    onChange={() => {
                      setWallet(
                        //@ts-ignore
                        wallet.address
                      );
                      getSigner(
                        //@ts-ignore
                        wallet
                      );
                      setChecked(i);
                    }}
                  />
                  <label>
                    {
                      //@ts-ignore
                      wallet.meta.name
                    }
                  </label>
                </div>
              ))
            )
          }
        </div>
      </div>

      <div className="mt-10 ml-4">
        <h1 className="text-3xl">Testing Typegen and accounts</h1>
        <form className="mt-10 w-full">
          <div className=" md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={teamName}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className=" md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-description"
                value={teamDescription}
                onChange={handleTeamDescriptionChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Team Size
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="team-size"
                value={teamSize}
                onChange={handleTeamSizeChange}
              />
            </div>
            <div></div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Add profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
