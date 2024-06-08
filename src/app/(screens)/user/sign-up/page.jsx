import Header from "@components/layout/header";
import Input from "@components/ui/input";
import IconCafe from "@components/ui/iconCafe";
import FilterButtonCafé from "@components/ui/filterButtonCafe";

import { PiUser } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiLock } from "react-icons/pi";


const SignUp = () => {
  return (
    <>
      <Header />
      <main className="flex w-full h-screen flex-col justify-center items-center bg-purple.1">
        <div className="flex w-full flex-row justify-center gap-md">
          <Input
            placeholder="Nome"
            prepend={<IconCafe Icon={PiUser} />}
          />
          <Input
            placeholder="Sobrenome"
            prepend={<IconCafe Icon={PiUser} />}
          />
        </div>
        <di className="flex justify-center flex-col gap-md w-full">
          <Input
              placeholder="Email"
              prepend={<IconCafe Icon={PiEnvelopeSimple} />}
            />
          <Input
              placeholder="Data de Nascimento"
              prepend={<IconCafe Icon={PiCalendarDots} />}
            />
          <Input
              placeholder="Senha"
              prepend={<IconCafe Icon={PiLock} />}
            />
          <Input
              placeholder="Confirmar Senha"
              prepend={<IconCafe Icon={PiLock} />}
            />
        </di>
      </main>
    </>
  );
};
export default SignUp;
