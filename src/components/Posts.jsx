import React from "react";
import LikeIcon from "./Icons/LikeIcon";
import Comment from "./Icons/Comment";
import ShareIcon from "./Icons/ShareIcon";
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

        <div className="p-5 text-md font-medium border-b border-primary-200">
          {props.content}
        </div>
        <div className="flex px-5 items-center justify-start py-2 gap-3">
          <div className=" justify-center flex rounded-full items-center p-2 shadow-sm border-b border-primary-200 ">
            <LikeIcon height="18px" width="18px" color="#374151" />
          </div>
          <div className=" justify-center flex gap-2 rounded-full items-center p-2 shadow-sm border-b border-primary-200 text-[#374151]">
            <Comment height="18px" width="18px" color="#374151" />
            <div className="text-xs">{props.comment}</div>
          </div>
          <div className=" justify-center flex rounded-full items-center p-2 border-b border-primary-200 ">
            <ShareIcon height="18px" width="18px" color="#374151" />
          </div>
        </div>
      </div>
    </div>
  );
}
