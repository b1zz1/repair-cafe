"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "@components/layout/header";
import IconCafe from "@components/ui/iconCafe";
import WaveCafe from "@/components/ui/waveCafe";
import Input from "@/components/ui/input/input";
import { Button } from "@components/ui/button";

import {
  PiUser,
  PiEnvelopeSimple,
  PiLock, PiCalendar,
} from "react-icons/pi";
import * as React from "react";

const userSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  surname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  birth_date: yup.date().required("Data de aniversário é obrigatória").typeError("Data de aniversário inválida"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirm_password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
});

const Edit = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const [username, setUsername] = useState("");
  const requestID = 4;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/read/${requestID}`, {
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

        setUsername(data.name);
        setValue("name", data.name);
        setValue("surname", data.surname);
        setValue("email", data.email);
        setValue("birth_date", data.birth_date);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    fetchUser();
  }, [setValue, requestID]);

  const handleUserSubmit = async () => {
    const { name, surname, email, password, birth_date} = getValues();
    try {
      const response = await fetch(`http://localhost:5000/user/update/${requestID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, surname, email, password, birth_date }),
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
  };

  return (
    <section className="flex w-full h-screen flex-col bg-purple.1">
      <Header />
      <main className="flex w-full h-full flex-col justify-between pt-8 sm:pt-12">
        <div className="flex h-full w-full flex-col justify-center items-center gap-8">
          <h1 className="text-3xl text-purple.5 select-none sm:text-4xl">
            Editar Perfil
          </h1>
          <form
            onSubmit={handleSubmit(handleUserSubmit)}
            className="flex flex-col gap-8 px-6 py-8 pt-0 w-full lg:w-1/3"
          >
            <div className="flex w-full flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full gap-1 relative">
                  <Input
                      type="text"
                      name={"name"}
                      placeholder="Nome"
                      prepend={<IconCafe Icon={PiUser} />}
                      register={register}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.2rem]">
                    {errors.name?.message}
                  </span>
              </div>
              <div className="flex flex-col w-full gap-1 relative">
                <Input
                    type="text"
                    name={"surname"}
                    placeholder="Sobrenome"
                    prepend={<IconCafe Icon={PiUser} />}
                    register={register}
                />
                <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                  {errors.surname?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full">
              <div className="flex justify-center flex-col gap-8 w-full">
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    type="email"
                    name={"email"}
                    placeholder="Email"
                    prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                    register={register}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.email?.message}
                  </span>
                </div>
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    type="date"
                    name={"birth_date"}
                    size="full"
                    prepend={<IconCafe Icon={PiCalendar} />}
                    placeholderFile="Data"
                    className="hide-date"
                    register={register}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.birth_date?.message}
                  </span>
                </div>
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    type="password"
                    name={"password"}
                    placeholder="Senha"
                    prepend={<IconCafe Icon={PiLock} />}
                    register={register}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    type="password"
                    name={"confirm_password"}
                    placeholder="Confirmar Senha"
                    prepend={<IconCafe Icon={PiLock} />}
                    register={register}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.confirm_password?.message}
                  </span>
                </div>
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
          </form>
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default Edit;
