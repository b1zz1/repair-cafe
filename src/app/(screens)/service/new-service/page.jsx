//http://localhost:3000/service/new-service
"use client";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "@components/layout/Header";
import WaveCafe from "@/components/ui/waveCafe";
import IconCafe from "@/components/ui/iconCafe";
import LineCafe from "@/components/ui/lineCafe";
import Input from "@/components/ui/input/input";
import MultiSelectCafe from "@components/ui/select/multiSelectCafe";
import { Textarea } from "@/components/ui/input/textarea";
import { Button } from "@components/ui/button";

import {
  PiCamera,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiMapPin,
  PiPhone,
  PiSparkle,
  PiStorefront,
} from "react-icons/pi";

const userSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
});

const NewService = () => {
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem("content");
    return savedContent ? savedContent : "Basico";
  });

  useEffect(() => {
    localStorage.setItem("content", content);
    console.log("Saving content:", content);
  }, [content]);


  return (
    <section className="flex w-full h-full flex-col bg-purple.1 sm:h-screen">
      <Header />
      <main className="flex w-full h-full flex-col justify-between pt-8">
        <div className="flex h-full w-full flex-col justify-center items-center gap-10">
          {content === "Basico" &&
            <>
              <div className="flex flex-row items-center">
                <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full">
                  <IconCafe Icon={PiStorefront} Colors="white" />
                </div>
                <LineCafe />
                <div className="bg-purple.3 p-2.5 rounded-full">
                  <IconCafe Icon={PiPhone} />
                </div>
                <LineCafe />
                <div className="bg-purple.3 p-2.5 rounded-full">
                  <IconCafe Icon={PiMapPin} />
                </div>
              </div>
              <form className="flex flex-col gap-8 py-8 pt-0">
                <h1 className="text-xl text-center text-purple.5 select-none sm:text-4xl">
                  Informações Básicas
                </h1>
                <div className="flex flex-col gap-5">
                  <Input
                    type="text"
                    size="g"
                    placeholder="Nome"
                    prepend={<IconCafe Icon={PiStorefront} />}
                  />
                  <Input
                    id="Picture"
                    type="file"
                    accept="image/png, image/jpeg"
                    size="g"
                    prepend={<IconCafe Icon={PiCamera} />}
                    placeholderFile="Foto"
                  />
                  <MultiSelectCafe
                    size="g"
                    placeholder="Especialidade (Opcional)"
                    IconLeft={PiSparkle}
                  />
                  <Textarea placeholder="Escreva a descrição aqui" />
                </div>
                <div className="flex justify-between w-full gap-5">
                  <Button variant="outline" size="lg">
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    onClick={() => setContent("Contato")}
                    // onClick={handleSubmit}
                  >
                    Avançar
                  </Button>
                </div>
              </form>
            </>
          }
          {content === "Contato" &&
            <>
              <div className="flex flex-row items-center">
                <div
                  className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full"
                >
                  <IconCafe Icon={PiStorefront} Colors="white" />
                </div>
                <LineCafe />
                <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full">
                  <IconCafe Icon={PiPhone} Colors="white" />
                </div>
                <LineCafe />
                <div className="bg-purple.3 p-2.5 rounded-full">
                  <IconCafe Icon={PiMapPin} />
                </div>
              </div>
              <div className="flex flex-col gap-8 py-8 pt-0">
                <h1 className="text-xl text-center text-purple.5 select-none sm:text-4xl">
                  Contato e Redes Sociais
                </h1>
                <div className="flex flex-col gap-5">
                  <Input
                    type="text"
                    size="g"
                    placeholder="Whatapp *"
                    prepend={<IconCafe Icon={PiPhone} />}
                  />
                  <Input
                    type="text"
                    size="g"
                    placeholder="Link do Instagram *"
                    prepend={<IconCafe Icon={PiInstagramLogo} />}
                  />
                  <Input
                    type="text"
                    size="g"
                    placeholder="Link do Facebook *"
                    prepend={<IconCafe Icon={PiFacebookLogo} />}
                  />
                  <Input
                    type="text"
                    size="g"
                    placeholder="Link do Facebook *"
                    prepend={<IconCafe Icon={PiLinkedinLogo} />}
                  />
                </div>
                <div className="flex justify-between w-full gap-5">
                  <Button variant="outline" size="lg" onClick={() => setContent("Basico")}>
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    onClick={() => setContent("Local")}
                  >
                    Avançar
                  </Button>
                </div>
              </div>
            </>
          } 
           {content === "Local" &&
            <>
              <div className="flex flex-row items-center">
                <div
                  className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full"
                >
                  <IconCafe Icon={PiStorefront} Colors="white" />
                </div>
                <LineCafe />
                <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full">
                  <IconCafe Icon={PiPhone} Colors="white"/>
                </div>
                <LineCafe />
                <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full">
                  <IconCafe Icon={PiMapPin} Colors="white"/>
                </div>
              </div>
              <div className="flex flex-col gap-8 py-8 pt-0">
                <h1 className="text-xl text-center text-purple.5 select-none sm:text-4xl">
                  Endereço
                </h1>
                <div className="flex flex-col gap-5">
                <Input
                    type="text"
                    size="g"
                    placeholder="Cidade"
                    prepend={<IconCafe Icon={PiPhone} />}
                  />
                  <Input
                    type="text"
                    size="g"
                    placeholder="Rua"
                    prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                  />
                  <Input
                    type="text"
                    size="g"
                    placeholder="Número"
                    prepend={<IconCafe Icon={PiInstagramLogo} />}
                  />
                </div>
                <div className="flex justify-between w-full gap-5">
                  <Button variant="outline" size="lg" onClick={() => setContent("Contato")}>
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
            </>
          } 
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default NewService;
