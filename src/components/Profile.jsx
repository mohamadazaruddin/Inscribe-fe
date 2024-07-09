import React from "react";
import { dateFormatter } from "../utils/dateFormatter";
import User from "./User/User";
import CancelIcon from "./Icons/CancelIcon";

export default function Profile({ data }) {
  const FollowingList = ({ list }) => {
    console.log(list);
    return (
      <>
        <div className="bg-[#00000027] absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full"></div>
        <div
          className={`w-[200px] md:w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 z-50 bg-contrast-200 shadow-md rounded-lg `}
        >
          <div
            className="text-md absolute top-2 right-2 cursor-pointer"
            onClick={() =>
              setShowList({
                data: [],
                view: "",
              })
            }
          >
            <CancelIcon height="32px" width="32px" />
          </div>
          <div className="mt-2 text-md text-gray-200 font-medium">
            {list.view}
            {list.data.map((user, index) => {
              return <User key={index} showArrow={false} userData={user} />;
            })}
          </div>
        </div>
      </>
    );
  };

  const [showList, setShowList] = React.useState({
    data: [],
    view: "",
  });
  return (
    <div className="p-4 bg-contrast-200">
      {showList?.data.length > 0 && <FollowingList list={showList} />}
      <div className="mt-10 flex flex-col justify-between h-full items-center">
        <div className="text-center w-full">
          <img
            src={`/assets/images/bitmoji/${data.profilepicture}`}
            alt="profile img"
            className={`w-[100px] h-[100px] rounded-full mx-auto`}
          />

          <div className="text-lg font-medium capitalize mt-2">
            {data.username}
          </div>
          <div className="text-sm text-gray-200">
            Joined at {dateFormatter(data.accountCreatedAt)}
          </div>

          <div className="flex items-center justify-between mt-4 py-2 border-b border-t border-primary-200">
            <div>
              <p className="text-sm font-medium">{data.posts?.length}</p>
              <p className="text-xs text-gray-200">Posts</p>
            </div>
            <div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowList({
                    data: data?.followers,
                    view: "Followers",
                  });
                }}
              >
                <p className="text-sm font-medium">{data.followers?.length}</p>
                <p className="text-xs text-gray-200">Followers</p>
              </div>
            </div>
            <div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowList({
                    data: data?.following,
                    view: "Following",
                  });
                }}
              >
                <p className="text-sm font-medium">{data.following?.length}</p>
                <p className="text-xs text-gray-200">Following</p>
              </div>
            </div>
          </div>
          <div className="text-start mt-4">
            <p className="text-md font-medium">About</p>
            <p className="text-sm text-gray-200 mt-1">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
