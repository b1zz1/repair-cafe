import React from "react";
import Header from "@components/layout/Header";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import wave from "../midia/wave.svg";
import Image from "next/image";
import FilterButtonCafé from "@/components/ui/filterButtonCafe";
import IconCafe from "@/components/ui/iconCafe";


let name = "Ana";

const Home = () => {


  return (
    <>
      <main className="flex w-full h-screen flex-col items-center bg-purple.1">
        <Header />
        <div className="flex h-full flex-col items-center justify-between gap-16 pt-40 ">
          <div div className="flex w-fit flex-col gap-8 px-12">
            <div>
              <h1 className="text-5xl text-purple.5">
                Ola, <b>{name}</b>
              </h1>
              <h1 className="text-5xl text-purple.5">
                O que vamos reparar hoje?
              </h1>
            </div>
            <Input
              placeholder="Pesquisar..."
              prepend={<IconCafe Icon={PiMagnifyingGlass} />}
              append={<FilterButtonCafé />}
            />
          </div>
          <Image src={wave} alt="Wave" />
        </div>
      </main>
    </>
  );
};

export default Home;
