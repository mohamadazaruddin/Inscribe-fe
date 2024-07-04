import React, { useContext, useEffect } from "react";
import BottomNav from "../components/BottomNav";
import HomeIcon from "../components/Icons/HomeIcon";
import ExploreIcon from "../components/Icons/ExploreIcon";
import NotificationIcon from "../components/Icons/NotificationIcon";
import CreateIcon from "../components/Icons/CreateIcon";
import ProfileIcon from "../components/Icons/ProfileIcon";
import Posts from "../components/Posts";
import Explore from "../components/Explore";
import CreatePostModal from "../components/CreatePostModal";
import Notifications from "../components/Notifications";
import Profile from "../components/Profile";
import { useCookies } from "react-cookie";
import AuthContext from "../services/context/AuthContext";
import axios from "axios";
export default function Home() {
  const [viewSection, setViewSection] = React.useState("Home");
  const [userDetails, setUserDetails] = React.useState();
  const [cookies] = useCookies(["user"]);
  const { logout } = useContext(AuthContext);
  const navItems = [
    {
      label: "Home",
      icon: <HomeIcon height="30px" width="30px" />,
    },
    {
      label: "Explore",
      icon: <ExploreIcon height="30px" width="30px" />,
    },
    {
      label: "Create",
      isActive: true,
      icon: <CreateIcon height="30px" width="30px" color="#fff" />,
    },
    {
      label: "Notification",
      icon: <NotificationIcon height="30px" width="30px" />,
    },
    {
      label: "Profile",
      icon: <ProfileIcon height="30px" width="30px" />,
    },
  ];

  const fetchUserDetails = () => {
    if (cookies) {
      // to fetch user detail using user ID
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user._id}`)
        .then(function (response) {
          setUserDetails(response.data);
        })
        .catch(function (err) {
          console.log(err, "err");
        });
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="bg-[#fafafa] w-full h-full p-5 md:p-10 ">
      <div className="block md:hidden relative w-full h-full">
        {viewSection === "Home" && (
          <div className="h-full w-full ">
            <Posts />
          </div>
        )}
        {viewSection === "Explore" && (
          <div className="h-full w-full ">
            <Explore />
          </div>
        )}
        {viewSection === "Create" && (
          <div className="h-full w-full ">
            <CreatePostModal />
          </div>
        )}
        {viewSection === "Notification" && (
          <div className="h-full w-full ">
            <Notifications />
          </div>
        )}
        {viewSection === "Profile" && (
          <div className="h-full w-full ">
            <Profile data={userDetails && userDetails} />
          </div>
        )}

        <BottomNav
          navItems={navItems}
          viewSection={viewSection}
          setViewSection={setViewSection}
        />
      </div>
      <div className="hidden md:block">
        Hello {cookies && cookies.user.userName}
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
}
