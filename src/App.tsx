import Sidebar from "./components/ui/sidebar";
import Header from "./components/ui/header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Teams from "./pages/Teams";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp/idnex";
import SignUpWallet from "./pages/SignUp/signUpWallet";
import CreateTeamPrifile from "./pages/CreateTeamProfile";
import TeamProfile from "./pages/TeamProfile";
import AddTeamMembers from "./pages/AddTeammembers";

// import { Home } from "react-feather";
// import TestModal from "./components/ui-elemetns/TestModule";

function App() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      {user.isLogged ? (
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex">
              <Sidebar />
            </div><div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 overflow-y-auto overflow-hidden paragraph ">
            {/* <TestModal /> */}
            {/* CONTENT - Set offset from the header and sidebar here. Base is "ml-12 md:ml-20"*/}
            <div className="ml-12 md:ml-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<TeamProfile />} />
                <Route path="/profile/teamprofile" element={<TeamProfile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            </div>
            </div>
          </div>
        </div>
      ) : (
        //  <main className="flex flex-col h-screen">
        //   <div className="flex flex-1 overflow-hidden">
        //     <div className=" bg-gray-100 w-32 p-4">Sidebar</div>
        //     <div className="flex flex-1 flex-col">
        //       <div className="flex bg-gray-300 h-16 p-4">Header</div>
        //       <div className="flex flex-1 bg-blue-300overflow-y-aut o paragraph px-4">
        //         Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
        //       </div>
        //     </div>
        //   </div>
        //   <div className="flex">Footer</div>
        // </main>
        <div>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="*" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="createprofile" element={<CreateTeamPrifile />} />
            <Route path="addteammembers" element={<AddTeamMembers />} />
            <Route path="/signupwallet" element={<SignUpWallet />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
