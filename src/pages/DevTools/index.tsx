import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { logInTestUser, logOut } from "../../redux/userSlice";

const DevTools = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return <div className="font-space-grotesk grid ">Dev Tools</div>;
};

export default DevTools;
