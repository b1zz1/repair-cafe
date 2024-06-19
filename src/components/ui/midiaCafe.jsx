import Image from "next/image";

import cardMidia from "/public/cardMidia.svg";

const MidiaCafe = ({ variant = "default", midia = ""}) => {
  return (
    <>
      {variant == "default" && (
        <Image
          src={cardMidia}
          alt="Midia"
          width={320}
          className="rounded-md "
        />
      )}
      {variant == "custom" && (
        <Image
          src={midia}
          alt="Wave"
          width={320}
        />
      )}
    </>
  );
};

export default MidiaCafe;
