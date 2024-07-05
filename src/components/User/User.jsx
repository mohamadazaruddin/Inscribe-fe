import React from "react";
import RightArrow from "../Icons/RightArrow";

export default function User({ userData, showArrow }) {
  return (
    <div className="flex items-center py-2 justify-between border-t border-primary-200">
      <div className="flex items-center">
        <img
          src={`assets/images/bitmoji/${userData.profileAvatar}`}
          height="25px"
          width="25px"
        ></img>
        <div className="text-xs font-medium text-[#000000] ms-[8px] capitalize">
          {userData.userName}
        </div>
        {!showArrow && (
          <div className="ms-[8px] text-[10px] text-gray-200">
            {userData.userLabel}
          </div>
        )}
      </div>
      {showArrow && (
        <div className="ms-[16px]">
          <button
            type="submit"
            onClick={() => {
              alert("want to follow " + " " + userData.userName);
            }}
            className="block px-2 text-center bg-primary-500 rounded-sm py-0.5 text-[10px] font-normal text-contrast-200"
          >
            Follow
          </button>
        </div>
      )}
    </div>
  );
}
