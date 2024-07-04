import React from "react";

export default function SideBar(props) {
  return (
    <div className="w-full rounded-full shadow-md bg-[#fff] p-2 absolute bottom-5 right-0 left-0">
      <div className="flex items-center justify-between">
        {props.navItems.map((item, i) => (
          <div
            onClick={() => {
              props.setViewSection(item.label);
            }}
            key={i}
            className={`flex p-2  justify-center  rounded-full items-center  ${
              item.isActive
                ? "bg-primary-500 text-contrast-200"
                : "text-[#374151]  "
            }${
              !item.isActive && item.label === props.viewSection
                ? "text-[#4f46e5] bg-[#f9fafb]"
                : "bg-[#fff] "
            }  `}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
