import React from "react";
export default function ApplicationLayout({ children }) {
  return (
    <div className="w-full h-screen overflow-y-auto bg-[url('../../public/assets/images/appBG.png')] bg-center bg-cover bg-no-repeat ">
      <div className="w-[360px] mx-auto h-full ">{children}</div>
    </div>
  );
}
