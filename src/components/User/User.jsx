import React from "react";
import RightArrow from "../Icons/RightArrow";

export default function User({ userData, action }) {
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
        {userData.label && (
          <div className="ms-[8px] text-[10px] text-gray-200">
            {userData.label}
          </div>
        )}
      </div>

      {action && action}
    </div>
  );
}
