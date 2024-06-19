import Image from "next/image";

import cardMidia from "/public/cardMidia.svg";

const MidiaCafe = ({ variant = "default", src}) => {
  return (
    <>
      {variant == "default" && (
        <Image
          src={src}
          alt="Midia"
          className="rounded-md h-fit w-fit select-none"
        />
      )}
      {variant == "shadow" && (
        <Image
          src={src}
          alt="Midia"
          className="rounded-md h-fit w-fit select-none shadow-md"
        />
      )}
    </>
  );
};

export default MidiaCafe;
