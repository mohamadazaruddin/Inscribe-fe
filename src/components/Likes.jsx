import React from "react";
import CancelIcon from "./Icons/CancelIcon";
import { dateFormatter } from "../utils/dateFormatter";
import Loader from "./Loader";

export default function Likes(props) {
  return (
    <>
      <div className="bg-[#00000027] absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full"></div>
      <div
        className={`w-full md:w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 z-50 bg-contrast-200 shadow-md rounded-lg `}
      >
        <div
          className="text-md absolute top-2 right-2 cursor-pointer"
          onClick={() => props.setOpenLikes("")}
        >
          <CancelIcon height="32px" width="32px" />
        </div>

        {props.postLikes ? (
          <div className="mt-1">
            <div className="px-5 pb-2 flex gap-4 place-items-center border-b border-primary-200">
              <img
                src={`/assets/images/bitmoji/${props.postLikes.post.user?.profileAvatar}`}
                alt="profile img"
                className={`w-[40px] h-[40px] rounded-full`}
              />
              <div>
                <div className="text-md font-medium">
                  {props.postLikes.post.user?.userName}
                </div>
                <div className="text-xs text-gray-200">
                  {dateFormatter(props.postLikes.post?.createdAt)}
                </div>
              </div>
            </div>

            <div className="p-5 text-sm font-medium border-b border-primary-200">
              {props.postLikes.post.content}
            </div>
            <div className="text-md text-primary-400 mt-2">Liked By</div>
            {props.postLikes.post.likes.length > 0 ? (
              <div className="py-2  pl -4">
                {props.postLikes.post.likes.map((item, i) => (
                  <div className="flex items-center py-1 border-b border-primary-200">
                    <img
                      src={`assets/images/bitmoji/${item.profileAvatar}`}
                      height="25px"
                      width="25px"
                    ></img>
                    <div className="text-xs font-medium text-[#000000] ms-[8px] capitalize">
                      {item.userName}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center py-5 text-md text-gray-200 font-medium">
                No Likes Found
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center my-5">
            <Loader text={"Loading Likes...."} />
          </div>
        )}
      </div>
    </>
  );
}
