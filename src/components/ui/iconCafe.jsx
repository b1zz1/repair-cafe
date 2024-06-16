import React from "react";

import { PiStorefront } from "react-icons/pi";

const IconCafe = ({ Icon = PiStorefront, size, Colors }) => {
  const sizeClasses = {
    s: "w-[1rem] h-[1rem]",
  };

  const colorsClasses = {
    white: "text-white.2",
  };

  return (
    <Icon
      className={`w-5 h-5 ${sizeClasses[size]}  text-purple.5 ${colorsClasses[Colors]}`}
    />
  );
};

export default IconCafe;
