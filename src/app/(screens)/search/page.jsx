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
  const dataReparos = [{
    id: '1',
    nomes: 'Reparador 1',
    localizacoes: "Jaraguá do Sul",
    descrições:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    conjuntoDeTags:[
      { id: '1', text: 'Eletronicos' },
      { id: '2', text: 'Celular' }
    ]
  },
  {
    id: '2',
    nomes: 'Reparador 2',
    localizacoes: "Guaramirim",
    descricoes:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    conjuntoDeTags:[
      { id: '3', text: 'Moveis' },
      { id: '4', text: 'Armario' },
      { id: '5', text: 'Mesas' }
    ]
  },
  {
    id: '3',
    nomes: 'Reparador 3',
    localizacoes: "Joinville",
    descricoes:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    conjuntoDeTags:[
      { id: '6', text: 'Geladeiras' },
      { id: '7', text: 'Fogões' }
    ]
  },
  {
    id: '4',
    nomes: 'Reparador 4',
    localizacoes: "Piracicaba",
    descricoes:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    conjuntoDeTags:[
      { id: '8', text: 'Ceramica' },
      { id: '9', text: 'Vasos' }
    ]
  }
  ]
  return (
    <section className="flex w-full h-screen flex-col bg-purple.1 overflow-hidden">
      <Header />
      <main className="flex w-full h-full flex-col justify-between px-8 py-6 overflow-y-auto sm:py-10 sm:px-16">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-10">
          <div className="w-full sm:w-1/3">
            <Input
              size="full"
              placeholder="Pesquisar..."
              prepend={<IconCafe Icon={PiMagnifyingGlass} />}
              append={<FilterButtonCafé />}
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center w-fit gap-4 sm:gap-8">
          {
          dataReparos.map((i) => {
            return <Card key={i.id} nome={i.nomes} localizacao={i.localizacoes} descricao={i.descricoes} tags={i.conjuntoDeTags}/>
          })
        }
          </div>
        </div>
      </main>
    </section>
  );
};

export default Search;
