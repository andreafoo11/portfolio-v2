import React from "react";

const IconHeader = ({ icon, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <img src={icon} style={{ width: "110px", height: "110px" }} />
      <p className="text-center font-bold">{description}</p>
    </div>
  );
};

export default IconHeader;
