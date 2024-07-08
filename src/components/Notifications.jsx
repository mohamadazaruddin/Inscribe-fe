import React from "react";
import User from "../components/User/User";
export default function Notifications(props) {
  return (
    <div className="">
      {props.notifications.map((user, index) => {
        return <User key={index} showArrow={false} userData={user} />;
      })}
    </div>
  );
}
