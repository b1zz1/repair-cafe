import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PiUserBold, PiCoffee } from "react-icons/pi";
import IconCafe from "../ui/iconCafe";

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-between text-purple.5 bg-white.1 items-center px-8 py-2 shadow-header">
      <div className="flex justify-start items-center gap-3">
        <IconCafe Icon={PiCoffee} />
        <h3 className="text-xl text-purple.5 select-none">Repair Cafe</h3>
      </div>
      <div className="flex justify-end items-center gap-6">
        <Button>Criar Ponto de Reparo</Button>
        <Button
          size="avatar"
          className="rounded-full bg-purple.3 hover:bg-purple.3 hover:ring-4 hover:ring-purple.5/20"
        >
          <IconCafe Icon={PiUserBold} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
