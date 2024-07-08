import React from "react";
import CancelIcon from "./Icons/CancelIcon";

export default function Likes(props) {
  console.log(props, "props");
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
        {/* {props.postComments && props.postComments.post.comments.length > 0 ? (
          <div className="mt-1">
            <div className="px-5 pb-2 flex gap-4 place-items-center border-b border-primary-200">
              <img
                src={`/assets/images/bitmoji/${props.postComments.post.user?.profileAvatar}`}
                alt="profile img"
                className={`w-[40px] h-[40px] rounded-full`}
              />
              <div>
                <div className="text-md font-medium">
                  {props.postComments.post.user?.userName}
                </div>
                <div className="text-xs text-gray-200">
                  {dateFormatter(props.postComments.post?.createdAt)}
                </div>
              </div>
            </div>

            <div className="p-5 text-sm font-medium border-b border-primary-200">
              {props.postComments.post.content}
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Loader text={"Loading Comments...."} />
          </div>
        )} */}
      </div>
    </>
  );
}
