import React from "react";

export default function Highlight({ children, level }) {
  return (
    <span
      style={{
        backgroundColor: level === 0 ? "#0275d8" : "#d9534f",
        borderRadius: "5px",
        color: "#fff",
        padding: "4px 8px",
      }}
    >
      {children}
    </span>
  );
}
