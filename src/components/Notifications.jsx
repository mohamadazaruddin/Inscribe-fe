import React from "react";
import User from "../components/User/User";
export default function Notifications(props) {
  return (
    <div className="">
      {props?.notifications?.length > 0 ? (
        <>
          {props.notifications.map((user, index) => {
            return <User key={index} showArrow={false} userData={user} />;
          })}
        </>
      ) : (
        <div className="text-center text-md text-gray-200 py-10">
          No Notifications
        </div>
      )}
    </div>
  );
}
