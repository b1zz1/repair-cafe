//http://localhost:3000/service/new-service
"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  description: yup.string(),
  phone: yup.string(),
  instagram: yup.string(),
  facebook: yup.string(),
  linkedin: yup.string(),
  number: yup.string(),
  street: yup.string(),
  city: yup.string(),
});

const EditService = () => {
  // Cache
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem("content");
    return savedContent ? savedContent : "Basico";
  });

  const serviceID = 1;

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

    useEffect(() => {
    localStorage.setItem("content", content);
    console.log("Saving content:", content);
  }, [content]);

    useEffect(() => {
      const fetchService = async () => {
      try {
        const response = await fetch(`http://localhost:5000/service/read/${serviceID}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setValue("name", data.name);
      setValue("email", data.email);
      setValue("description", data.description);
      setValue("phone", data.phone);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    fetchService();
    }, [setValue, serviceID])
  const onSubmit = async () => {
    const { name, email, description, phone } = getValues();
    console.log({name, email, description, phone});

    try {
      const response = await fetch(`http://localhost:5000/service/update/${serviceID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, description, phone }),
      });
      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Server response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      // Handle successful response
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

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
                    name="name"
                    size="g"
                    placeholder="Nome"
                    prepend={<IconCafe Icon={PiStorefront} />}
                    register={register}
                  />
                  <Input
                    type="email"
                    name={"email"}
                    placeholder="Email"
                    prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                    register={register}
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
                  <Textarea
                      name="description"
                      placeholder="Escreva a descrição aqui"
                      register={register}
                  />
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
                <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-2.5 rounded-full">
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
              <form className="flex flex-col gap-8 py-8 pt-0">
                <h1 className="text-xl text-center text-purple.5 select-none sm:text-4xl">
                  Contato e Redes Sociais
                </h1>
                <div className="flex flex-col gap-5">
                  <Input
                    type="text"
                    name={"phone"}
                    size="g"
                    placeholder="phone *"
                    prepend={<IconCafe Icon={PiPhone} />}
                    register={register}
                  />
                  <Input
                    type="text"
                    name={"instagram"}
                    size="g"
                    placeholder="Link do Instagram *"
                    prepend={<IconCafe Icon={PiInstagramLogo} />}
                    register={register}
                  />
                  <Input
                    type="text"
                    name={"facebook"}
                    size="g"
                    placeholder="Link do Facebook *"
                    prepend={<IconCafe Icon={PiFacebookLogo} />}
                    register={register}
                  />
                  <Input
                    type="text"
                    name={"linkedin"}
                    size="g"
                    placeholder="Link do Linkedin *"
                    prepend={<IconCafe Icon={PiLinkedinLogo} />}
                    register={register}
                  />
                </div>
                <div className="flex justify-between w-full gap-5">
                  <Button variant="outline" size="lg" onClick={() => setContent("Basico")}>
                    Voltar
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => setContent("Local")}
                  >
                    Avançar
                  </Button>
                </div>
              </form>
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
              <form type="submit" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 py-8 pt-0">
                <h1 className="text-xl text-center text-purple.5 select-none sm:text-4xl">
                  Endereço
                </h1>
                <div className="flex flex-col gap-5">
                <Input
                    type="text"
                    name={"city"}
                    size="g"
                    placeholder="Cidade"
                    prepend={<IconCafe Icon={PiPhone} />}
                    register={register}
                  />
                  <Input
                    type="text"
                    name={"street"}
                    size="g"
                    placeholder="Rua"
                    prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                    register={register}
                  />
                  <Input
                    type="text"
                    name={"number"}
                    size="g"
                    placeholder="Número"
                    prepend={<IconCafe Icon={PiInstagramLogo} />}
                    register={register}
                  />
                </div>
                <div className="flex justify-between w-full gap-5">
                  <Button variant="outline" size="lg" onClick={() => setContent("Contato")}>
                    Voltar
                  </Button>
                  <Button
                    type={"submit"}
                    variant="default"
                    size="lg"
                  >
                    Confirmar
                  </Button>
                </div>
                </form>
            </>
          }
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default EditService;
