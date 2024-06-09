'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Header from "@components/layout/header"
import Input from "@components/ui/input"
import DatePicker from "@components/ui/datePicker"
import IconCafe from "@components/ui/iconCafe"
import Wave from "@/components/ui/wave"
import { Button } from "@components/ui/button"

import {
  PiUser,
  PiEnvelopeSimple,
  PiCalendarDots,
  PiLock,
} from "react-icons/pi"

const userSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  surname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
  confirm_password: yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória").oneOf([yup.ref("password"), null], "Senhas não conferem")
})

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) })

  const handleUserSubmit = async (data) => {
    const { name, email, password } = data
    try {
      const response = await fetch("#", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
      console.log("Response status:", response.status)
      const result = await response.json();
      console.log("Server response:", result)
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      // Handle successful response
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <section className="flex w-full h-screen flex-col">
      <Header />
      <main className="flex w-full h-screen flex-col justify-center items-center gap-10 bg-purple.1">
        <h3 className="text-5xl text-purple.5 select-none">
          Registre-se
        </h3>
        <form onSubmit={handleSubmit(handleUserSubmit)} className="flex flex-col gap-md w-full p-md md:w-1/3">
          <div className="flex w-full flex-row justify-between gap-md">
            <Input
              type="text"
              placeholder="Nome"
              prepend={<IconCafe Icon={PiUser} />}
              size="full"
              {...register("name")}
            />
            {errors.name?.message}
            <Input
              type="text"
              placeholder="Sobrenome"
              prepend={<IconCafe Icon={PiUser} />}
              size="full"
              {...register("surname")}
            />
            {errors.surname?.message}
          </div>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex justify-center flex-col gap-md w-full">
              <Input
                  type="email"
                  placeholder="Email"
                  prepend={<IconCafe Icon={PiEnvelopeSimple} />}
                  {...register("email")}
                />
                {errors.email?.message}
              <DatePicker size="full"/>
              <Input
                  type="password"
                  placeholder="Senha"
                  prepend={<IconCafe Icon={PiLock} />}
                  {...register("password")}
                />
                {errors.password?.message}
              <Input
                  placeholder="Confirmar Senha"
                  prepend={<IconCafe Icon={PiLock} />}
                  {...register("confirm_password")}
                />
                {errors.confirm_password?.message}
            </div>
            <div className="flex justify-between w-full">
                  <Button variant="outline" size="lg">Cancelar</Button>
                  <Button type="submit" variant="default" size="lg">Confirmar</Button>
            </div>
          </div>
        </form>
        <Wave variant="alt" />
      </main>
    </section>
  )
}

export default SignUp
