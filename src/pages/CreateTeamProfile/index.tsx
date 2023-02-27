import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { logInTestUser } from "../../redux/userSlice";

import { Mail, GitHub } from "react-feather";
import Discord from "../../assets/svg-icons/discord-icon.svg";
import Twitter from "../../assets/svg-icons/twitter-icon.svg";
import Matrix from "../../assets/svg-icons/ele-icon.png";

const CreateTeamPrifile = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logInTest = () => {
    dispatch(logInTestUser());
  };
  return (
    <div className="font-space-grotesk grid ">
      <div className="grid place-items-start pt-20  pl-4 md:pl-20 md:pl-80">
        <div className="flex flex-col">
          <div>
            <h1 className="md:text-5xl font-medium">Sign Up</h1>
            <p className="mt-2 text-sm">Create your profile</p>
          </div>
          <div className="mt-8">
            <h3>Are you an organisation or an individual?</h3>
            <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
              <button className="border rounded w-40 bg-black py-3 px-8 text-white text-xs">
                Organization
              </button>
              <button className="border rounded w-40 ml-2 bg-gray-400 py-3 px-8 text-white text-xs">
                Individual
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3>Are you a applicant or a foundation?</h3>
            <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
              <button className="border rounded w-40 bg-black py-3 px-8 text-white text-xs">
                Applicant
              </button>
              <button className="border rounded w-40 ml-2 bg-gray-400 py-3 px-8 text-white text-xs">
                Foundation
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 md:mt-12 md:w-screen flex flex-col">
            <form className="md:w-5/12">
              <label>Team Name</label>
              <input
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="What is the name of your team?"
                type="text"
              />
            </form>
            <form className="mt-4 md:w-5/12">
              <label>About</label>
              <textarea
                className="mt-2 w-full resize-none h-40 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What is the name of your team?"
              />
            </form>
            <form className="mt-4 md:w-5/12">
              <label>Project Type</label>
              <select
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="Choole a category"
              >
                <option value="" className="" disabled selected hidden>
                  Select your option
                </option>
                <option value="test1">Test1</option>
                <option value="test2">Test2</option>
                <option value="test3">Test3</option>
                <option value="text3">Test4</option>
              </select>
            </form>
            <form className="mt-4 md:w-5/12">
              <label>Mission</label>
              <textarea
                className="mt-2 w-full resize-none h-36 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What does your team want to achieve?"
              />
            </form>
          </div>
          <div className="mt-10 w-5/12">
            <h3 className="mb-4">Links</h3>
            <div className="flex">
              <Mail size="40" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <img src={Discord} alt="Discord" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Discord"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <img src={Twitter} alt="Discord" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Discord"
                type="text"
              />
            </div>
            {/* <div className="mt-4 flex">
              <img src={Matrix} alt="Discord"className="w-1/12"/>{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Matrix"
                type="text"
              />
            </div> */}
            <div className="mt-4 flex">
              <GitHub size="40"/>
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Github"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <img src={Twitter} alt="Discord" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Twitter"
                type="text"
              />
            </div>
            <Link to="/addteammembers">
            <button className="mt-10 border bg-black text-white w-full text-lg mb-12">Save and close</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateTeamPrifile;
