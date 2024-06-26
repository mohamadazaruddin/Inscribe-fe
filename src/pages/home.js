import React from "react";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="bg-[#fafafa] h-screen overflow-y-hidden">
      <div className="flex">
        <SideBar />
        <div className="p-[30px]">Home Page</div>
      </div>
    </div>
  );
}
