"use client";

import Header from "@components/layout/Header";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import wave from "../midia/wave.svg";
import Image from "next/image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let name = "Ana";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Saved value:", inputValue);
      navigate(`/pages/search/${inputValue}`);
    }
  };

  const handleChange = (event) => {
    //Salva o valor do input a cada mudança
    setInputValue(event.target.value);
  };

  return (
    <main className="flex w-full h-screen flex-col items-center bg-purple.1">
      <Header />
      <div className="flex h-full flex-col items-center justify-between pt-40 ">
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
            placeholder="Search..."
            prepend={<PiMagnifyingGlass />}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Image src={wave} alt="Wave" />
      </div>
    </main>
  );
};

export default Home;
