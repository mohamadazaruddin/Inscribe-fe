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
import CommentSection from "../components/CommentSection";
import { Navigate } from "react-router-dom";
import Likes from "../components/Likes";
import Loader from "../components/Loader";
import SharePost from "../components/SharePost";

export default function Home() {
  const [viewSection, setViewSection] = React.useState("Home");
  const [userDetails, setUserDetails] = React.useState();
  const [notifications, setNotifications] = React.useState();
  const [postsData, setPostsData] = React.useState();
  const [totalusers, setTotalUsers] = React.useState();
  const [openComments, setOpenComments] = React.useState("");
  const [openlikes, setOpenLikes] = React.useState("");
  const [openShare, setOpenShare] = React.useState("");
  // const [category, setCategory] = React.useState("newest");
  const [postComments, setPostComments] = React.useState();
  const [postLikes, setPostLikes] = React.useState();
  const [cookies, remove] = useCookies(["user"]);
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
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user.id}/suggestions`
      )
      .then(function (response) {
        setTotalUsers(response.data);
      })
      .catch(function (err) {
        toast.error(err?.response?.data?.message, {
          autoClose: 1000,
        });
      });
  };
  const fetchUserDetails = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user.id}`)
      .then(function (response) {
        setUserDetails(response.data);
      })
      .catch(function (err) {
        if (err?.response?.status == 403) {
          logout();
        }
      });
  };

  const fetchPost = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/post?query=newest`)
      .then(function (response) {
        setPostsData(response.data.postContent);
        fetchNotifications();
      })
      .catch(function (err) {
        toast.error(err.message || err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  const fetchNotifications = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/users/${cookies.user.id}/notifications`
      )
      .then(function (response) {
        console.log(response.headers.AxiosHeaders, "red");
        setNotifications(response.data);
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  const handlecreatepost = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/post/${userDetails.id}`, {
        content: data,
      })
      .then(function (response) {
        toast.success(`Posted Successfully`, {
          autoClose: 1000,
        });
        setViewSection("Home");
        fetchNotifications();
        fetchPost();
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  const likePost = (id) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/post/${id}/like`, {
        userId: userDetails.id,
      })
      .then(function (response) {
        fetchPost();
        fetchNotifications();
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  const getLikes = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/post/${openlikes}/like`)
      .then(function (response) {
        console.log(response);
        setPostLikes(response.data);
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };
  const getComment = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/post/${openComments}/comment`)
      .then(function (response) {
        setPostComments(response.data);
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  useEffect(() => {
    if (openComments.length > 20) {
      getComment();
    }
  }, [openComments]);

  useEffect(() => {
    if (openlikes.length > 20) {
      getLikes();
    }
  }, [openlikes]);

  const commentPost = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/post/${data.id}/comment`, {
        userId: userDetails.id,
        comment: data.comment,
      })
      .then(function (response) {
        getComment();
        fetchPost();
        fetchNotifications();
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cookies.user) {
        fetchUserDetails();
        fetchPost();
        fetchExploreData();
        fetchNotifications();
      } else {
        Navigate("/login");
      }
    }, [2000]);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const handleFollow = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/users/${userDetails.id}/follow`,
        {
          followId: id,
        }
      )
      .then(function (response) {
        toast.success(response.data.message, {
          autoClose: 1000,
        });
        fetchUserDetails();
        fetchExploreData();
        fetchNotifications();
      })
      .catch(function (err) {
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      });
  };

  return (
    <div
      className={"bg-[#fafafa] w-full h-screen p-5 overflow-y-auto relative "}
    >
      {userDetails && postsData && totalusers ? (
        <>
          {openComments && (
            <CommentSection
              setOpenComments={setOpenComments}
              commentPost={commentPost}
              postComments={postComments}
              openComments={openComments}
              userDetails={userDetails}
            />
          )}

          {openlikes && (
            <Likes
              setOpenLikes={setOpenLikes}
              postLikes={postLikes}
              openlikes={openlikes}
            />
          )}

          {openShare && (
            <SharePost setOpenShare={setOpenShare} openShare={openShare} />
          )}

          <div className="block md:hidden relative w-full h-full">
            {viewSection === "Home" && (
              <>
                {postsData && (
                  <div className=" posts h-full w-full overflow-y-auto pb-[100px]">
                    {postsData?.map((item, i) => (
                      <div key={i}>
                        <Posts
                          openComments={openComments}
                          setOpenComments={setOpenComments}
                          setOpenLikes={setOpenLikes}
                          openlikes={openlikes}
                          likePost={likePost}
                          image={item?.user?.profileAvatar}
                          username={item?.user?.userName}
                          isLikedbyMe={item.likes.includes(cookies.user.id)}
                          createdtime={item?.createdAt}
                          content={item.content}
                          comment={item.comments.length}
                          likes={item.likes.length}
                          postId={item._id}
                          openShare={openShare}
                          setOpenShare={setOpenShare}
                        />
                      </div>
                      // <Posts image={item.} username={item.} createdtime={} content={item.content} comment={} />
                    ))}
                  </div>
                )}
              </>
            )}
            {viewSection === "Explore" && (
              <div className=" bg-contrast-200 p-4 h-full">
                <div className="text-lg text-[#000000] font-medium">
                  Suggested for you
                </div>
                <div className="mt-4 overflow-y-auto h-full posts ">
                  <Explore handleFollow={handleFollow} usersList={totalusers} />
                </div>
              </div>
            )}
            {viewSection === "Create" && (
              <div className="h-full w-full ">
                <CreatePostModal
                  mobView={true}
                  setViewSection={setViewSection}
                  image={cookies.user.profilepicture}
                  handlecreatepost={handlecreatepost}
                />
              </div>
            )}
            {viewSection === "Notification" && (
              <div className=" bg-contrast-200 p-4 h-full">
                <div className="text-lg text-[#000000] font-medium">
                  Notifications
                </div>
                <div className="mt-4 overflow-y-auto h-full posts ">
                  <Notifications notifications={notifications?.data} />
                </div>
              </div>
            )}
            {viewSection === "Profile" && (
              <div className="h-full w-full">
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
            <div className="flex gap-5 h-full w-full">
              <div className="w-[20%]  bg-contrast-200">
                {userDetails && <Profile data={userDetails} />}
              </div>
              <div className="w-[50%] h-full overflow-hidden">
                <div className="mt-4">
                  <CreatePostModal
                    mobView={false}
                    image={cookies.user.profilepicture}
                    handlecreatepost={handlecreatepost}
                  />
                </div>
                <div className="h-full">
                  {postsData && (
                    <div className=" posts h-full w-full overflow-y-auto pb-[230px]">
                      {postsData?.map((item, i) => (
                        <div key={i}>
                          <Posts
                            openComments={openComments}
                            setOpenComments={setOpenComments}
                            setOpenLikes={setOpenLikes}
                            openlikes={openlikes}
                            likePost={likePost}
                            image={item?.user?.profileAvatar}
                            username={item?.user?.userName}
                            isLikedbyMe={item.likes.includes(cookies.user.id)}
                            createdtime={item?.createdAt}
                            content={item.content}
                            comment={item.comments.length}
                            likes={item.likes.length}
                            postId={item._id}
                            openShare={openShare}
                            setOpenShare={setOpenShare}
                          />
                        </div>
                        // <Posts image={item.} username={item.} createdtime={} content={item.content} comment={} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[30%] ">
                <div className="mt-4 bg-contrast-200 p-4">
                  <div className="text-lg text-[#000000] font-medium">
                    Suggested for you
                  </div>
                  <div className="mt-4 overflow-y-auto h-[200px] posts ">
                    <Explore
                      handleFollow={handleFollow}
                      usersList={totalusers}
                    />
                  </div>
                </div>
                <div className="mt-4 bg-contrast-200 p-4 ">
                  <div className="text-lg text-[#000000] font-medium">
                    Notifications
                  </div>
                  <div className="mt-4 overflow-y-auto h-[200px] posts ">
                    <Notifications notifications={notifications?.data} />
                  </div>
                </div>
              </div>
            </div>
            {/* <button onClick={logout}>logout</button> */}
          </div>
        </>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          {" "}
          <Loader />
        </div>
      )}{" "}
    </div>
  );
}
