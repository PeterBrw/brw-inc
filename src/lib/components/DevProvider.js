import React from "react";

function DevProvider({ children }) {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "grey" }}>
      {children}
    </div>
  );
}

export default DevProvider;
