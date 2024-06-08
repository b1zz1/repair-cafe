import Header from "@components/layout/header"
import Input from "@components/ui/input"
import IconCafe from "@components/ui/iconCafe"
import ButtonCafe from "@/components/ui/buttonCafe"
import Wave from "@/components/ui/wave"
import { Button } from "@components/ui/button"


import {
  PiUser,
  PiUserFill,
  PiEnvelopeSimple,
  PiCalendarDots,
  PiLock,
  PiLockFill
} from "react-icons/pi"

const SignUp = () => {
  return (
    <>
      <Header />
      <main className="flex w-full h-screen flex-col justify-center items-center gap-10 bg-purple.1">
        <h3 className="text-5xl text-purple.5 select-none">
          Registre-se
        </h3>
        <form className="flex flex-col gap-md w-full p-md md:w-1/3">
          <div className="flex w-full flex-row justify-between gap-md">
            <Input
              placeholder="Nome"
              prepend={<IconCafe Icon={PiUserFill} />}
              size="full"
            />
            <Input
              placeholder="Sobrenome"
              prepend={<IconCafe Icon={PiUser} />}
              size="full"
            />
          </div>
          <div className="flex justify-center flex-col gap-md w-full">
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
                prepend={<IconCafe Icon={PiLockFill} />}
              />
            <Input
                placeholder="Confirmar Senha"
                prepend={<IconCafe Icon={PiLock} />}
              />
              <div className="flex justify-between w-full">
                {/* <ButtonCafe variant="outline" label="Cancelar" />
                <ButtonCafe variant="default" label="Registrar" /> */}
                <Button variant="outline" size="lg">Cancelar</Button>
              </div>
          </div>
        </form>
        <Wave variant="alt" />
      </main>
    </>
  )
}

export default SignUp
