"use server"

import React from "react";
import Header from "@components/layout/Header";
import Input from "@/components/ui/input";
import FilterButtonCafé from "@/components/ui/filterButtonCafe";
import IconCafe from "@/components/ui/iconCafe";
import { PiMagnifyingGlass } from "react-icons/pi";
import WaveCafe from "@/components/ui/waveCafe";


let name = "Ana";

const Home = () => {
  return (
    <>
      <section className="flex w-full h-screen flex-col items-center bg-purple.1">
        <Header />
        <div className="flex h-full flex-col items-center justify-between gap-16 pt-40 ">
          <div div className="flex w-fit flex-col gap-8 px-12">
            <div>
              <h1 className="text-5xl text-purple.5 select-none">
                Olá, <b>{name}</b>
              </h1>
              <h1 className="text-5xl text-purple.5 select-none">
                O que vamos reparar hoje?
              </h1>
            </div>
            <Input
              placeholder="Pesquisar..."
              prepend={<IconCafe Icon={PiMagnifyingGlass} />}
              append={<FilterButtonCafé />}
            />
          </div>
          <WaveCafe variant="default"/>
        </div>
      </section>
    </>
  );
};

export default Home;
