import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import NotificationIcon from "./Icons/NotificationIcon";
import CreateIcon from "./Icons/CreateIcon";

export default function SideBar() {
  const navItems = [
    {
      label: "Home",
      icon: <HomeIcon height="16px" width="16px" />,
    },
    {
      label: "Explore",
      icon: <ExploreIcon height="16px" width="16px" />,
    },
    {
      label: "Notification",
      icon: <NotificationIcon height="16px" width="16px" />,
    },
    {
      label: "Create",
      icon: <CreateIcon height="16px" width="16px" />,
    },
  ];

  return (
    <div className="w-[260px] bg-[#fff] px-4 h-full">
      <img
        className="h-[50px] w-[50px]"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600 "
        alt=""
      />
      <div className="mt-4">
        {navItems.map((item, i) => (
          <div
            key={i}
            className="flex py-2 px-4 text-[#374151] font-medium items-center hover:text-[#4f46e5] hover:bg-[#f9fafb]"
          >
            <div className="mr-2">{item.icon}</div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
