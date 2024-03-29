import { Link } from "react-router-dom";

import SearchBar from "./searchBar";
import TestModal from "../../ui-elemetns/TestModule";
import DevTools from "../../../pages/DevTools";

import BellIcon from "../../../assets/svg-icons/bell-icon.svg";
import SettingsIcon from "../../../assets/svg-icons/settings-icon.svg";
import UserIcon from "../../../assets/svg-icons/user-icon.svg";

function Header() {

  // let openModal = false
  // const openDevTools = () => {
  //   openModal = true
  // }

  return (
    <div>
      <TestModal children={<DevTools />} />
      <nav className="ml-12 md:ml-20 navbar border-b border-l md:py-4 bg-white relative ">
        {/* Nav Elements */}
        <div className="static mr-10 flex">
          <div
            className="ml-2 md:ml-12 flex items-center md:text-lg"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav grid grid-cols-4 gap-2 md:gap-6">
              <li className="nav-item">
                <Link to="/">
                  <a
                    className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/explore">
                  <a
                    className="-ml-0.5 md:-ml-0 nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Explore
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teams">
                  <a
                    className="nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Teams
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ksmindexing">
                  <a
                    className="-ml-0.5 md:-ml-0 nav-link block hover:text-gray-700 hover:underline transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    KSM
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex gap-4 absolute right-40">
            <SearchBar />
            <div className="flex gap-5">
              <Link to="/notifications">
                <img
                  src={BellIcon}
                  alt="Notifications"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link to="/profile">
                <img
                  src={UserIcon}
                  alt="User page"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link to="Settings">
                <img
                  src={SettingsIcon}
                  alt="Settings page"
                  className="hover:cursor-pointer"
                />
              </Link>
              <button>DevTools</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
