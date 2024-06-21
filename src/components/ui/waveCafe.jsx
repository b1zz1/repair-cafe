import Image from "next/image";

import wave from "/public/wave.svg";
import waveAlt from "/public/wave-alt.svg";

const WaveCafe = ({ variant = "default" }) => {
  return (
    <>
      {variant == "default" && (
        <Image
          src={wave}
          alt="Wave"
          className="pointer-events-none bg-purple.1 select-none"
        />
      )}
      {variant == "alt" && (
        <Image
          src={waveAlt}
          alt="Wave"
          className=" pointer-events-none bg-purple.1 select-none"
        />
      )}
    </>
  );
};

export default WaveCafe;
