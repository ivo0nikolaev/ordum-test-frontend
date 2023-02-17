import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logInTestUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logInTest = () => {
    dispatch(logInTestUser());
  };
  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="flex flex-col">
        <h1 className="md:text-5xl mb-10">Log in of sign up</h1>

        <button className="border border-gray-400 hover:bg-gray-200 py-2.5" onClick={logInTest}>
          Log in (test)
        </button>
        <div className="my-1 md:my-2"></div>

        <button className="border border-gray-400 hover:bg-gray-200 py-2.5">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
      <div className="-mt-80 flex flex-col">
        <h2 className="md:text-5xl mb-10">New To Blockchain? Create Wallet</h2>
        <button className="border border-gray-400 hover:bg-gray-200 py-2.5 w-6/12 item-center ml-16 md:ml-48">
          Create Wallet
        </button>
      </div>
    </div>
  );
};

export default LogIn;
