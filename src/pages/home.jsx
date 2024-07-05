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
import { toast } from "react-toastify";
import axios from "axios";
export default function Home() {
  const [viewSection, setViewSection] = React.useState("Home");
  const [userDetails, setUserDetails] = React.useState();
  const [postsData, setPostsData] = React.useState();

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

  const fetchExploreData = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user._id}`)
      .then(function (response) {
        setUserDetails(response.data);
      })
      .catch(function (err) {
        console.log(err, "err");
      });
  };
  const fetchUserDetails = () => {
    // to fetch user detail using user ID
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user._id}`)
      .then(function (response) {
        setUserDetails(response.data);
      })
      .catch(function (err) {
        console.log(err, "err");
      });
  };

  const fetchPost = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/post?query=newest`)
      .then(function (response) {
        setPostsData(response.data.posts);
      })
      .catch(function (err) {
        console.log(err, "err");
      });
  };
  const handlecreatepost = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/post/${cookies.user._id}`, {
        content: data,
      })
      .then(function (response) {
        toast.success(`Posted Successfully`, {
          autoClose: 1000,
        });
        setViewSection("Home");
        fetchPost();
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };
  useEffect(() => {
    if (cookies.user) {
      fetchUserDetails();
      fetchPost();
    }
  }, []);

  return (
    <div className="bg-[#fafafa] w-full h-full p-5  ">
      <div className="block md:hidden relative w-full h-full">
        {viewSection === "Home" && (
          <>
            {postsData && (
              <div className=" posts h-full w-full overflow-y-auto ">
                {postsData?.map((item, i) => (
                  <div key={i}>
                    <Posts
                      image={item?.user?.profileAvatar}
                      username={item?.user?.userName}
                      createdtime={item?.createdAt}
                      content={item.content}
                      comment={""}
                    />
                  </div>
                  // <Posts image={item.} username={item.} createdtime={} content={item.content} comment={} />
                ))}
              </div>
            )}
          </>
        )}
        {viewSection === "Explore" && (
          <div className="h-full w-full ">
            <Explore />
          </div>
        )}
        {viewSection === "Create" && (
          <div className="h-full w-full ">
            <CreatePostModal
              mobView={true}
              image={cookies.user.profileAvatar}
              handlecreatepost={handlecreatepost}
            />
          </div>
        )}
        {viewSection === "Notification" && (
          <div className="h-full w-full ">
            <Notifications />
          </div>
        )}
        {viewSection === "Profile" && (
          <div className="h-full w-full ">
            {userDetails && <Profile data={userDetails} />}
          </div>
        )}

        <BottomNav
          navItems={navItems}
          viewSection={viewSection}
          setViewSection={setViewSection}
        />
      </div>
      <div className="hidden md:block  h-full">
        <div className="flex gap-5 h-full">
          <div className="w-[400px] h-full bg-contrast-200">
            {userDetails && <Profile data={userDetails} />}
          </div>
          <div className="w-full h-full overflow-hidden">
            <div>
              <CreatePostModal
                mobView={false}
                image={cookies.user.profileAvatar}
                handlecreatepost={handlecreatepost}
              />
            </div>
            <div className="h-full">
              {postsData && (
                <div className=" posts h-full w-full overflow-y-auto ">
                  {postsData?.map((item, i) => (
                    <div key={i}>
                      <Posts
                        image={item?.user?.profileAvatar}
                        username={item?.user?.userName}
                        createdtime={item?.createdAt}
                        content={item.content}
                        comment={""}
                      />
                    </div>
                    // <Posts image={item.} username={item.} createdtime={} content={item.content} comment={} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-[400px] bg-contrast-200">
            <div>
              <Explore />
            </div>
            <div>
              <Notifications />
            </div>
          </div>
        </div>
        {/* <button onClick={logout}>logout</button> */}
      </div>
    </div>
  );
}
