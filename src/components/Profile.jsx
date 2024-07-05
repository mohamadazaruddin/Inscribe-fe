import React from "react";
import { dateFormatter } from "../utils/dateFormatter";

export default function Profile({ data }) {
  return (
    <div className="p-4 bg-contrast-200">
      <div className="mt-10 flex flex-col justify-between h-full items-center">
        <div className="text-center w-full">
          <img
            src={`/assets/images/bitmoji/${data.profilepicture}`}
            alt="profile img"
            className={`w-[100px] h-[100px] rounded-full mx-auto`}
          />

          <div className="text-lg font-medium capitalize mt-2">
            {data.username}
          </div>
          <div className="text-sm text-gray-200">
            Joined at {dateFormatter(data.accountCreatedAt)}
          </div>

          <div className="flex items-center justify-between mt-4 py-2 border-b border-t border-primary-200">
            <div>
              <p className="text-sm font-medium">{data.posts?.length}</p>
              <p className="text-xs text-gray-200">Posts</p>
            </div>
            <div>
              <div>
                <p className="text-sm font-medium">{data.followers?.length}</p>
                <p className="text-xs text-gray-200">Followers</p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-sm font-medium">{data.following?.length}</p>
                <p className="text-xs text-gray-200">Following</p>
              </div>
            </div>
          </div>
          <div className="text-start mt-4">
            <p className="text-md font-medium">About</p>
            <p className="text-sm text-gray-200 mt-1">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
