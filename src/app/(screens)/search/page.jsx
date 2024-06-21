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
      <main className="flex w-FIT h-full flex-col justify-between px-8 py-6 overflow-y-auto sm:py-10 sm:px-16">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-10">
          <div className="w-full sm:w-1/3">
            <Input
              size="full"
              placeholder="Pesquisar..."
              prepend={<IconCafe Icon={PiMagnifyingGlass} />}
              append={<FilterButtonCafé />}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center w-fit min-w-min gap-4 sm:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          </div>
      </main>
    </section>
  );
};

export default Search;
