import Image from "next/image"

import wave from "/public/wave.svg"
import waveAlt from "/public/wave-alt.svg"

const Wave = ({ variant }) => {
    return (
        <>
            {variant == "default" &&  <Image src={wave} alt="Wave" className="absolute bottom-0 pointer-events-none" />}
            {variant == "alt" &&  <Image src={waveAlt} alt="Wave" className="absolute bottom-0 pointer-events-none" />}
        </>
    )
}

export default Wave