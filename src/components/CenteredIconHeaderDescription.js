import React from "react";

const CenteredIconHeaderDescription = ({ icon, header, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center pr-4 pl-4">
      <img src={icon} alt={header} className="w-48 h-48" />
      <h3 className="text-lg font-bold text-center">{header}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default CenteredIconHeaderDescription;
