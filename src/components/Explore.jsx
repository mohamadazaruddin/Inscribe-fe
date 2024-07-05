import React from "react";
import User from "./User/User";

export default function Explore({ usersList }) {
  return (
    <div className="">
      {usersList?.map((user, index) => {
        return <User key={index} showArrow={true} userData={user} />;
      })}
    </div>
  );
}
