import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Bookmark } from "react-feather";

const TeamProfile = () => {
  //   const { user } = useSelector((state: RootState) => state.user);
  //   const dispatch = useDispatch()

  //   const logInTest = () => {
  //     dispatch(logInTestUser())
  //   }
  return (
    <div className="font-space-grotesk flex flex-col w-screen ">
      {/* Banner */}
      <div className="h-40 md:h-60 bg-emerald-500">Banner</div>
      {/* Company info and social */}
      <nav className="flex navbar bg-white relative mb-8 md:mb-16">
        <div className="ml-2 md:ml-16 w-full flex ">
          <div
            className="
          -mt-5 h-14 w-14
          md:-mt-8 md:h-24 md:w-24
          border-2
          bg-black rounded-full text-white"
          ></div>
          <div className="ml-1 md:ml-5 md:mt-2 flex flex-col">
            <span className="md:text-xl">ORG Name</span>
            <span className="text-xs md:text-sm">Project type</span>
          </div>
          <div className="absolute mt-2 right-16 md:mt-4 md:right-32 flex flex-row items-center">
            <span>...</span>
            <span className="mr-1">
              <Bookmark />
            </span>
            <button
              className="
             rounded
             px-2 md:px-16 md:py-0.5 md:py-1
             bg-black text-white
             text-sm md:text-base"
            >
              Follow
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col ">
        {/* Header */}
        <div className="mx-10 md:ml-16 md:mr-32 flex navbar md:border-b border-black mb-8 flex gap-8">
          <button>Summary</button>
          <button>Activity</button>
          <button>Team</button>
        </div>
        <div className="mx-10 md:ml-16 md:mr-32 h-screen flex flex-row">
          {/* Sidebar */}
          <nav className="w-16 md:w-48 bg-red-300">Profile Type</nav>

          {/* Content */}
          <div className="flex flex-1 flex-col bg-blue-300 overflow-y-auto paragraph">Content</div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
