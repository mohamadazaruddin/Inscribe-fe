import React from "react";
import User from "./User/User";

export default function Explore(props) {
  return (
    <div className="">
      {props.usersList.length > 0 ? (
        <>
          {props.usersList?.map((user, index) => {
            return (
              <User
                key={index}
                showArrow={true}
                userData={user}
                action={
                  <div className="ms-[16px]">
                    <button
                      type="submit"
                      onClick={() => {
                        props.handleFollow(user._id);
                      }}
                      className="block px-2 text-center bg-primary-500 rounded-sm py-0.5 text-[10px] font-normal text-contrast-200"
                    >
                      Follow
                    </button>
                  </div>
                }
              />
            );
          })}
        </>
      ) : (
        <div className="text-center text-md text-gray-200 py-10">
          No Suggestions
        </div>
      )}
    </div>
  );
}
