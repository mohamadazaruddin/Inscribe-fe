import React, { useRef } from "react";
import CancelIcon from "./Icons/CancelIcon";
import { dateFormatter } from "../utils/dateFormatter";
import html2canvas from "html2canvas";

export default function SharePost(props) {
  const gradientDivRef = useRef(null);
  const handleScreenshot = () => {
    html2canvas(gradientDivRef.current)
      .then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = `inscribe-post.png`;
        link.click();
      })
      .catch((error) => {
        console.error("Error taking screenshot:", error);
      });
  };
  return (
    <>
      <div className="bg-[#00000027] absolute top-0 left-0 right-0 bottom-0 z-10 h-full w-full"></div>
      <div
        className={`w-full md:w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 z-50 bg-contrast-200 shadow-md rounded-lg `}
      >
        <div
          className="text-md absolute top-2 right-2 cursor-pointer"
          onClick={() => props.setOpenShare("")}
        >
          <CancelIcon height="32px" width="32px" />
        </div>
        <div className="text-lg font-medium">Share as Image</div>

        <div
          ref={gradientDivRef}
          className="h-[350px] w-full rounded-md flex items-center justify-center mt-2 p-5"
          style={{
            background: "linear-gradient(130deg, #5661b3, #ee5883)",
          }}
        >
          <div
            style={{
              background: " rgba( 255, 255, 255, 0.4 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 16px )",
              "-webkit-backdrop-filter": "blur( 16px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <div className="w-[250px] md:w-[400px]  rounded-md">
              <div className="pt-2 ">
                <div className="px-3 pb-2 flex gap-4 place-items-center border-b border-primary-200">
                  <img
                    src={`/assets/images/bitmoji/${props.openShare.image}`}
                    alt="profile img"
                    className={`w-[40px] h-[40px] rounded-full`}
                  />
                  <div>
                    <div className="text-md font-medium">
                      {props.openShare.username}
                    </div>
                    <div className="text-xs text-gray-400">
                      {dateFormatter(props.openShare.date)}
                    </div>
                  </div>
                </div>
                <div className="p-3  text-md font-medium ">
                  {props.openShare.content}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          id="screenshotButton"
          onClick={handleScreenshot}
          className="block mx-auto mt-4 px-4 text-center bg-primary-500 rounded-sm py-1 text-md font-normal text-contrast-200"
        >
          Download
        </button>
      </div>
    </>
  );
}
