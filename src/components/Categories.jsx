import React from "react";

export default function Categories(props) {
  return (
    <div className="flex justify-center">
      <button
        className={`px-4 py-1 ${
          props.category === "newest" ? "bg-contrast-200" : "bg-primary-200"
        } `}
        onClick={() => {
          props.setCategory("newest");
        }}
      >
        Newest
      </button>
      <button
        onClick={() => {
          props.setCategory("following");
        }}
        className={`px-4 py-1 ${
          props.category === "following" ? "bg-contrast-200" : "bg-primary-200"
        }`}
      >
        Following
      </button>
    </div>
  );
}
