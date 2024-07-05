import React from "react";
import User from "../components/User/User";
export default function Notifications() {
  const userData = [
    {
      userProfile: "BillyPink.svg",
      userName: "BillyPink",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "BillyPink.svg",
      userName: "BillyPink",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "BillyPink.svg",
      userName: "BillyPink",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "ArnoldBlue.svg",
      userName: "ArnoldBlue",
      userLink: "",
      userLabel: "commented on your post",
    },
    {
      userProfile: "DanielGreen.svg",
      userName: "DanielGreen",
      userLink: "",
      userLabel: "commented on your post",
    },
  ];
  return (
    <div className="">
      {userData.map((user, index) => {
        return <User key={index} showArrow={false} userData={user} />;
      })}
    </div>
  );
}
