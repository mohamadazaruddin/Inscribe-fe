import React from "react";
import Loader from "./Loader";
import CancelIcon from "./Icons/CancelIcon";
import { dateFormatter } from "../utils/dateFormatter";

export default function CommentSection(props) {
  const [createComment, setCreateComment] = React.useState("");
  return (
    <>
      <div className="bg-[#00000027] absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full"></div>
      <div
        className={`w-full md:w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 z-50 bg-contrast-200 shadow-md rounded-lg `}
      >
        <div
          className="text-md absolute top-2 right-2 cursor-pointer"
          onClick={() => props.setOpenComments("")}
        >
          <CancelIcon height="32px" width="32px" />
        </div>
        {props.postComments ? (
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

            {props.postComments.post.comments.length > 0 ? (
              <div className="py-2 border-b border-primary-200 pl -4">
                {props.postComments.post.comments.map((item, i) => (
                  <div className="flex items-center mt-2">
                    <img
                      src={`assets/images/bitmoji/${item.user.profileAvatar}`}
                      height="25px"
                      width="25px"
                    ></img>
                    <div className="text-xs font-medium text-[#000000] ms-[8px] capitalize">
                      {item.user.userName}
                    </div>

                    <div className="ms-[8px] text-xs text-text">
                      {item.comment}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center py-5 text-md text-gray-200 font-medium">
                No Commments Found
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center py-5">
            <Loader text={"Loading Comments...."} />
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (createComment.length > 0) {
              setCreateComment("");
              props.commentPost({
                id: props.openComments,
                comment: createComment,
              });
            }
          }}
        >
          <div className="mb-4 mt-4 flex gap-2 items-center">
            <img
              src={`/assets/images/bitmoji/${props.userDetails.profilepicture}`}
              alt="profile img"
              className={`w-[30px] h-[30px] rounded-full`}
            />
            <textarea
              style={{ resize: "none" }}
              className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-primary-200 border-primary-500 placeholder:text-primary-500"
              id="username"
              rows={1}
              type="text"
              placeholder="add a comment..."
              value={createComment}
              onChange={(e) => setCreateComment(e.target.value)}
            />
            <button
              type="submit"
              disabled={!createComment.length > 0}
              className="block px-5 text-center bg-primary-500 rounded-sm  py-2 text-sm font-medium text-contrast-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
