//http://localhost:3000/service/view-service
"use client";

import React, { useEffect, useState } from "react";
import Header from "@components/layout/Header";
import WaveCafe from "@/components/ui/waveCafe";
import MidiaCafe from "@/components/ui/midiaCafe";

let nome = "Nome do Ponto de Reparo";
let localizacao = "Localizacao";
let descricao =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
let tag = "Especialidade";
let usuario = "Nome de Usuario";
let whatsapp = "https://web.whatsapp.com"
let instagram = "https://www.instagram.com"
let facebook = "https://www.facebook.com"
let linkedin = "https://www.linkedin.com"


import photoMidia from "/public/photoMidia.svg";
import TagCafe from "@/components/ui/tagCafe";
import { Button } from "@/components/ui/button";
import IconCafe from "@/components/ui/iconCafe";
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiWhatsappLogoFill,
} from "react-icons/pi";

const Search = () => {
  return (
    <section className="flex w-full h-fit flex-col items-center bg-purple.1 md:h-screen">
      <Header />
      <div className="flex h-full flex-col items-center justify-between gap-16 pt-12 md:pt-40 ">
        <div className="flex flex-col items-center gap-10 px-8  w-full md:flex-row md:w-4/5 sm:px-12 sm:gap-20">
            <MidiaCafe src={photoMidia} variant="shadow"/>
          <div className="flex flex-col gap-8">
            <h1 className="text-xl text-purple.5 sm:text-4xl">
              {nome}
            </h1>
            <div className="flex flex-col gap-1">
              <text className="text-teste.1 text-sm truncate-5-lines">
                Localização
              </text>
              <text className=" text-white.5 text-base">{localizacao}</text>
            </div>
            <div className="flex flex-col gap-1">
              <text className="text-teste.1 text-sm truncate-5-lines">
                Descrição
              </text>
              <text className=" text-white.5 text-base">{descricao}</text>
            </div>
            <div className="flex flex-wrap flex-row h-fit gap-2">
              <TagCafe text={tag} />
              <TagCafe text={tag} />
              <TagCafe text={tag} />
            </div>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
              <div className="flex flex-col gap-1">
                <text className="text-teste.1 text-sm truncate-5-lines">
                  Reparador
                </text>
                <text className=" text-white.5 text-base">{usuario}</text>
              </div>
              <div className="flex flex-row gap-5 items-center ">
                <text className="text-teste.1 text-sm truncate-5-lines">
                  Redes Sociais:
                </text>
                <div className="flex flex-row gap-1">
                  <a href={whatsapp} target="_blank">
                    <Button variant="ghost" size="avatar">
                      <IconCafe Icon={PiWhatsappLogoFill} size={"g"} />
                    </Button>
                  </a>
                  <a href={instagram} target="_blank">
                    <Button variant="ghost" size="avatar">
                      <IconCafe Icon={PiInstagramLogoFill} size={"g"} />
                    </Button>
                  </a>
                  <a href={facebook} target="_blank" >
                    <Button variant="ghost" size="avatar">
                      <IconCafe Icon={PiFacebookLogoFill} size={"g"} />
                    </Button>
                  </a>
                  <a href={linkedin} target="_blank">
                    <Button variant="ghost" size="avatar">
                      <IconCafe Icon={PiLinkedinLogoFill} size={"g"} />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveCafe variant="default" />
      </div>
    </section>
  );
};

export default Search;
