import Sidebar from "./components/ui/sidebar";
import Header from "./components/ui/header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Teams from "./pages/Teams";
import Notifications from "./pages/Notifications";
import User from "./pages/User";
import Settings from "./pages/Settings";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp/idnex";
import SignUpWallet from "./pages/SignUp/signUpWallet";
import CreateTeamPrifile from "./pages/CreateTeamProfile";

// import { Home } from "react-feather";
// import TestModal from "./components/ui-elemetns/TestModule";

function App() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      {user.isLogged ? (
        <div className="">
          <Sidebar />
          <Header />
          {/* <TestModal /> */}
          {/* Set offset from the header and sidebar here. Base is "ml-12 md:ml-20"*/}
          <div className="ml-14 mt-2 md:mt-4 md:ml-24">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/user" element={<User />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
          <Route path="/" element={<LogIn  />} />
          <Route path="*" element={<LogIn  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="createprofile" element={<CreateTeamPrifile />}/>
          <Route path="/signupwallet" element={<SignUpWallet />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
