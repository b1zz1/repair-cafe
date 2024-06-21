import React from "react";

import MidiaCafe from "./midiaCafe";
import TagCafe from "./tagCafe";
import cardMidia from "/public/cardMidia.svg";

const Card = ({
  nome = "Nome do Ponto de Reparo",
  localizacao = "Localizacao",
  descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  tag = "Especialidade",
}) => {
  return (
    <div className="bg-white.1 rounded-md w-80 outline-none hover:outline-purple.6 hover:outline-offset-2 cursor-pointer shadow-lg ">
      <MidiaCafe src={cardMidia}/>
      <div className="flex flex-col gap-4 px-5 py-4 h-60">
        <div className="flex flex-col gap-2">
          <div className="Title">
            <h6 className=" text-purple.6 text-xl font-medium">{nome}</h6>
            <text className=" text-white.5 text-base">{localizacao}</text>
          </div>
          <text className="text-teste.1 text-sm truncate-5-lines">
            {descricao}
          </text>
        </div>
        <div className="flex flex-wrap flex-row h-fit overflow-hidden gap-2">
          <TagCafe text={tag} />
          <TagCafe text={tag} />
          <TagCafe text={tag} />
        </div>
      </div>
    </div>
  );
};

export default Card;
