import React from "react";

export default function CreatePostModal(props) {
  const [createPost, setCreatePost] = React.useState("");
  return (
    <div className="h-full w-full relative ">
      <div
        className={`w-full ${
          props.mobView
            ? "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5"
            : ""
        }  bg-contrast-200 shadow-md rounded-lg p-4 `}
      >
        {props.mobView && (
          <div className="text-lg text-center font-medium">Create a Post</div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (createPost.length > 0) {
              props.handlecreatepost(createPost);
              setCreatePost("");
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
              rows={5}
              type="text"
              placeholder="Share your thoughts"
              value={createPost}
              onChange={(e) => setCreatePost(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!createPost.length > 0}
              className="block px-5 text-center bg-primary-500 rounded-sm py-2 text-md font-medium text-contrast-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
