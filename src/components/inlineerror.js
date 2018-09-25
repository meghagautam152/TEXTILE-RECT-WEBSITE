import React from "react";

const InlineError = ({ text }) => {
  return (
    <div style={{ color: "#f44842", padding: "2px 5px", fontSize:"8px" }}>{text}</div>
  );
};
export default InlineError;
