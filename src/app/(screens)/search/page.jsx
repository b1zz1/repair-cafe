//http://localhost:3000/search
"use client";

import React, { useEffect, useState } from "react";
import Header from "@components/layout/Header";
import Input from "@/components/ui/input/input";
import IconCafe from "@/components/ui/iconCafe";
import { PiMagnifyingGlass } from "react-icons/pi";
import FilterButtonCafé from "@/components/ui/filterButtonCafe";
import Card from "@/components/ui/card";

const Search = () => {

  return (
    <section className="flex w-full h-screen flex-col bg-purple.1 overflow-hidden">
      <Header />
      <main className="flex w-full h-full flex-col justify-between px-16 pt-10 ">
        <div className="w-full flex flex-col items-center gap-10">
          <Input
            size="g"
            placeholder="Pesquisar..."
            prepend={<IconCafe Icon={PiMagnifyingGlass} />}
            append={<FilterButtonCafé />}
          />
          <div className="flex flex-row flex-wrap w-full gap-4 bg-white.3">
            <Card />
            <span className="w-72 h-10 bg-purple.2"></span>
            <span className="w-72 h-10 bg-purple.4"></span>
            <span className="w-72 h-10 bg-purple.2"></span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Search;
