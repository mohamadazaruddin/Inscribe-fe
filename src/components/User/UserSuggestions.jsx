import React from "react";
import User from "./User";

export default function UserSuggestions() {
  const userData = [
    { userProfile: "BillyPink.svg", userName: "BillyPink", userLink: "", userLabel: "BillyPink label" },
    { userProfile: "ArnoldBlue.svg", userName: "ArnoldBlue", userLink: "", userLabel: "" },
    { userProfile: "DanielGreen.svg", userName: "DanielGreen", userLink: "", userLabel: "" },
  ];
  return (
    <div className="bg-[#fff] p-[24px]">
        <div className="text-[18px] text-[#000000] font-medium">Suggested for you</div>
        <div className="mt-[24px]"> {userData.map((user,index) => {
        return <User userData={user}/>;
      })}</div>
     
    </div>
  );
}
