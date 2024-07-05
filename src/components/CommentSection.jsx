import React from "react";

export default function CommentSection(props) {
  const [createComment, setCreateComment] = React.useState("");
  return (
    <div
      className={`${
        props.mobView ? "w-full" : "w-[600px]"
      } absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 z-50 bg-contrast-200 shadow-md rounded-lg `}
    >
      <div className="text-md" onClick={() => props.setOpenComments("")}>
        Close
      </div>
      {props.mobView && (
        <div className="text-lg text-center font-medium">Create a Post</div>
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
        <div className="mb-4 mt-4 flex gap-2">
          <img
            src={`/assets/images/bitmoji/${props.image}`}
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
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!createComment.length > 0}
            className="block px-5 text-center bg-primary-500 rounded-sm py-1 text-sm font-medium text-contrast-200"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
