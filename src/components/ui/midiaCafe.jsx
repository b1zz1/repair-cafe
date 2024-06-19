import Image from "next/image";

import cardMidia from "/public/cardMidia.svg";

const MidiaCafe = ({ variant = "default", src = {cardMidia}}) => {
  return (
    <>
      {variant == "default" && (
        <Image
          src={src}
          alt="Midia"
          className="rounded-md shadow-md h-fit w-fit select-none"
        />
      )}
    </>
  );
};

export default MidiaCafe;
