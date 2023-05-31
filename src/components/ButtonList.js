import React from "react";
import Button from "./Buttons";

const ButtonList = () => {
  const ButtonNames = [
    "All",
    "Comedy",
    "Sports",
    "Virat",
    "Football",
    "Movies",
    "Cooking",
    "IPL2023",
    "Asian",
    "Cars",
    "Vlogs",
    "Raps",
    "Popular",
    "Beauty",
    "Tech",
    "New",
  ];
  return (
    <div className="flex font-serif ">
      {ButtonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
