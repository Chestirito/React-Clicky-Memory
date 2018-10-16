import React from "react";

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")} align="center">
    {children}
  </div>
);
