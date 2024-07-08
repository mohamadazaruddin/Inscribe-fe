import React from "react";
import LikeIcon from "./Icons/LikeIcon";
import Comment from "./Icons/Comment";
// import ShareIcon from "./Icons/ShareIcon";
import { dateFormatter } from "../utils/dateFormatter";
export default function Posts(props) {
  return (
    <div className="w-full rounded-md bg-contrast-200 mt-3">
      <div className="pt-2 ">
        <div className="px-5 pb-2 flex gap-4 place-items-center border-b border-primary-200">
          <img
            src={`/assets/images/bitmoji/${props.image}`}
            alt="profile img"
            className={`w-[40px] h-[40px] rounded-full`}
          />
          <div>
            <div className="text-md font-medium">{props.username}</div>
            <div className="text-xs text-gray-200">
              {dateFormatter(props.createdtime)}
            </div>
          </div>
        </div>

        <div className="p-5 text-sm font-medium border-b border-primary-200">
          {props.content}
        </div>
        <div className="flex px-5 items-center justify-start py-2 gap-3">
          <div
            className={`${
              props.isLikedbyMe
                ? "bg-primary-500 text-[#ffffff]"
                : "bg-contrast-200 text-[#374151]"
            } justify-center flex rounded-full gap-2 items-center p-2 shadow-sm border-b border-primary-200 cursor-pointer`}
            onClick={() => {
              props.likePost(props.postId);
            }}
          >
            <LikeIcon height="18px" width="18px" />
          </div>
          <div
            className="text-sm text-black cursor-pointer"
            onClick={() => props.setOpenLikes(props.postId)}
          >
            {props.likes}
          </div>
          <div
            className=" justify-center flex gap-2 rounded-full items-center p-2 shadow-sm border-b border-primary-200 text-[#374151]"
            onClick={() => props.setOpenComments(props.postId)}
          >
            <Comment height="18px" width="18px" color="#374151" />
            <div className="text-sm text-black cursor-pointer">
              {props.comment}
            </div>
          </div>
          {/* <div className=" justify-center flex rounded-full items-center p-2 border-b border-primary-200 ">
            <ShareIcon height="18px" width="18px" color="#374151" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
