import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logInTestUser } from "../../redux/userSlice"
import { Link } from "react-router-dom";

const SignUp = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  const logInTest = () => {
    dispatch(logInTestUser())
  }
  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="-mt-96 grid place-items-center border px-10 py-5 md:px-40 md:py-20">
        <h1 className="md:text-5xl mb-10">Sign Up</h1>

        <Link to="/signupwallet"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet</button></Link>
        <div className="my-1 md:my-2"></div>
        <Link to="/createProfile"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Domain</button></Link>
        <div className="my-1 md:my-2"></div>
        <button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">DID</button>
      </div>
    </div>
  );
};

export default SignUp;
