import React from "react";

const ProcessCard = ({ number, title, description, inverted }) => {
  if (inverted) {
    return (
      <div
        className="flex flex-row items-center gap-4 justify-center rounded-lg p-4 mb-4"
        style={{ backgroundColor: "#ff9c84", width: "90%" }}
      >
        <div
          className="text-5xl font-bold text-center rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "#A99898",
            color: "white",
            width: "55px",
            height: "70px",
          }}
        >
          <h3>{number}</h3>
        </div>

        <div className="flex w-[80%] flex-col text-black dark:text-neutral-100">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-black/75 dark:text-neutral-300">{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-row items-center gap-4 justify-center rounded-lg p-4 mb-4"
        style={{ backgroundColor: "#A99898", width: "90%" }}
      >
        <div
          className="text-5xl font-bold text-center rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "#F75223",
            color: "white",
            width: "55px",
            height: "70px",
          }}
        >
          <h3>{number}</h3>
        </div>

        <div className="flex w-[80%] flex-col text-black dark:text-neutral-100">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-black/75 dark:text-neutral-300">{description}</p>
        </div>
      </div>
    );
  }
};

export default ProcessCard;
