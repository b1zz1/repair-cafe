//http://localhost:3000/user/sign-up
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "@components/layout/header";
import Input from "@/components/ui/input/input";
import DatePicker from "@/components/ui/input/datePicker";
import IconCafe from "@components/ui/iconCafe";
import Wave from "@/components/ui/waveCafe";
import { Button } from "@components/ui/button";

import { PiUser, PiEnvelopeSimple, PiLock, PiCalendar } from "react-icons/pi";
import WaveCafe from "@/components/ui/waveCafe";

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
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const handleUserSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      const response = await fetch("http://localhost:5000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, password }),
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
            Registre-se
          </h1>
          <form
            onSubmit={handleSubmit(handleUserSubmit)}
            className="flex flex-col gap-8 px-6 py-8 pt-0 w-full md:w-1/3"
          >
            <div className="flex w-full flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full relative">
                <Input
                  type="text"
                  placeholder="Nome"
                  prepend={<IconCafe Icon={PiUser} />}
                  {...register("name")}
                />
                <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                  {errors.name?.message}
                </span>
              </div>
              <div className="flex flex-col w-full gap-1 relative">
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  prepend={<IconCafe Icon={PiUser} />}
                  {...register("surname")}
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
                    placeholder="Email"
                    prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                    {...register("email")}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.email?.message}
                  </span>
                </div>
                <Input
                  id="Picture"
                  type="date"
                  size="full"
                  prepend={<IconCafe Icon={PiCalendar} />}
                  placeholderFile="Data"
                  className="hide-date"
                />
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    type="password"
                    placeholder="Senha"
                    prepend={<IconCafe Icon={PiLock} />}
                    {...register("password")}
                  />
                  <span className="text-error.1 text-xs absolute inset-y-[3.1rem]">
                    {errors.password?.message}
                  </span>
                </div>
                <div className="flex flex-col w-full gap-1 relative">
                  <Input
                    placeholder="Confirmar Senha"
                    prepend={<IconCafe Icon={PiLock} />}
                    {...register("confirm_password")}
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

export default SignUp;
