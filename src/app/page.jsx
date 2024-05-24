
import Header from "@components/layout/Header";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import wave from '../midia/wave.svg';
import Image from "next/image";

let name = "Ana";

const Home = () => {
  return (
    <>
      <main className="flex w-full h-screen flex-col items-center bg-purple.1">
        <Header />
        <div className="flex h-full flex-col items-center justify-between pt-40 ">
          <div div className="flex w-fit flex-col gap-8 px-12" >
            <div>
              <h1 className="text-5xl text-purple.5">
                Ola, <b>{name}</b>
              </h1>
              <h1 className="text-5xl text-purple.5">
                O que vamos reparar hoje?
              </h1>
            </div>
            <Input placeholder="Search..." prepend={<PiMagnifyingGlass />} />
          </div>
          <Image src={wave} alt="Wave" />
        </div>
      </main>
    </>
  );
};

export default Home;
