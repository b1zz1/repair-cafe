"use client";
//http://localhost:3000/user/sign-in

import Header from "@components/layout/header";
import Input from "@components/ui/input";
import IconCafe from "@components/ui/iconCafe";
import { Button } from "@components/ui/button";

import {
  PiEnvelopeSimple,
  PiLock,
} from "react-icons/pi";
import WaveCafe from "@/components/ui/waveCafe";

const SignUp = () => {
  return (
    <section className="flex w-full h-screen flex-col bg-purple.1">
      <Header />
      <main className="flex w-full h-full flex-col justify-between pt-8 sm:pt-12">
        <div className="flex h-full w-full flex-col justify-center items-center gap-8">
          <h1 className="text-3xl text-purple.5 select-none sm:text-4xl">
            Login
          </h1>
          <form className="flex flex-col gap-8 px-6 py-8 pt-0 w-full md:w-1/3">
            <div className="flex flex-col w-full gap-5 relative">
              <Input
                type="text"
                placeholder="E-mail"
                prepend={<IconCafe Icon={PiEnvelopeSimple} />}
              />
              <Input
                type="text"
                placeholder="Senha"
                prepend={<IconCafe Icon={PiLock} />}
              />
            </div>
            <div className="flex justify-center w-full gap-5">
              <Button type="submit" variant="default" size="full">
                Confirmar
              </Button>
            </div>
          </form>
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default SignUp;
