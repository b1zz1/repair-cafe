//http://localhost:3000/user/sign-up
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "@components/layout/header";
import Input from "@/components/ui/input/input";
import IconCafe from "@components/ui/iconCafe";
import { Button } from "@components/ui/button";

import { PiCalendar, PiEnvelopeSimple, PiLock, PiUser } from "react-icons/pi";
import WaveCafe from "@/components/ui/waveCafe";
import React, { useEffect } from "react";

const userSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  surname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirm_password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  birth_date: yup
    .date()
    .required("Data de aniversário é obrigatória")
    .typeError("Data de aniversário inválida"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  useEffect(() => {
    const fetchUser = () => {
      console.log("recarregou a página");
    };

    fetchUser();
  }, []);

  const handleUserSubmit = async () => {
    console.log("funcionando");
    const { name, birth_date, surname, email, password, confirm_password } =
      getValues();
    console.log({
      name,
      birth_date,
      surname,
      email,
      password,
      confirm_password,
    });
    try {
      const response = await fetch("http://localhost:5000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          birth_date,
          surname,
          email,
          password,
          confirm_password,
        }),
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
          <h1 className="text-3xl text-purple.5 sm:text-4xl">
            Registre-se
          </h1>
          <div className="flex w-full flex-col justify-center items-center gap-8">
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
                <span className="text-error.1 text-xs absolute inset-y-[3.4rem]">
                  {errors.birth_date?.message}
                </span>
              </div>
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
              <div className="flex justify-between w-full gap-5">
                <Button variant="outline" size="lg">
                  Cancelar
                </Button>
                <Button type="submit" variant="default" size="lg">
                  Confirmar
                </Button>
              </div>
            </form>
          </div>
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default SignUp;