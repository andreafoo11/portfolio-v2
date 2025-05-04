import React from "react";

const IconHeaderDescription = ({ icon, header, description }) => {
  return (
    <div className="flex-col mb-4">
      <img src={icon} alt={header} className="w-24 h-24 mr-4" />
      <div>
        <h3 className="text-lg font-bold mb-2">{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconHeaderDescription;
