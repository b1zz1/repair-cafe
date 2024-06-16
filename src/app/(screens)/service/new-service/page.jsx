"use client"
//http://localhost:3000/service/new-service

import Header from "@components/layout/Header";
import WaveCafe from "@/components/ui/waveCafe";
import IconCafe from "@/components/ui/iconCafe";
import { PiCamera, PiMapPin, PiPhone, PiSparkle, PiStorefront } from "react-icons/pi";
import LineCafe from "@/components/ui/lineCafe";
import Input from "@components/ui/input";
import SelectCafe from "@/components/ui/selectCafe";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@components/ui/button";

const NewService = () => {
  return (
    <section className="flex w-full h-screen flex-col bg-purple.1 overflow-hidden">
      <Header />
      <main className="flex w-full h-full flex-col justify-between pt-12">
        <div className="flex h-full w-full flex-col justify-center items-center gap-10">
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
          <div className="flex flex-col gap-8 py-8 pt-0">
            <h1 className="text-xl text-purple.5 select-none sm:text-4xl">
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
              <SelectCafe size="g" placeholder="Especialidade (Opcional)" IconLeft={PiSparkle}/>
              <Textarea placeholder="Escreva a descrição aqui"/>
            </div>
            <div className="flex justify-between w-full gap-5">
                <Button variant="outline" size="lg">
                  Cancelar
                </Button>
                <Button type="submit" variant="default" size="lg">
                  Confirmar
                </Button>
              </div>
          </div>
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default NewService;
