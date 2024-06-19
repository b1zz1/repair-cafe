import React from "react";

const TagCafe = ({ text }) => {
  return (
    <div className="flex py-1 px-2 bg-purple.3 text-xs text-teste.2 font-semibold w-fit rounded-xl items-center">
      {text}
    </div>
  );
};

export default TagCafe;
