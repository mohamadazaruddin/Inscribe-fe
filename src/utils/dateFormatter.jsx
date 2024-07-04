import React from "react";

export function dateFormatter(props) {
  let date = new Date(props);
  let options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options);
}
