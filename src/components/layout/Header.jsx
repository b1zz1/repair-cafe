import IconCafe from "../ui/iconCafe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PiUserBold, PiCoffee } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-between text-purple.5 bg-white.1 items-center px-8 py-2 shadow-header">
      <Link className="flex justify-start items-center gap-3" href="/">
        <IconCafe Icon={PiCoffee} />
        <h3 className="text-xl text-purple.5 select-none">Repair Cafe</h3>
      </Link>
      <div className="flex justify-end items-center gap-6">
        <Link href="/service/new-service">
          <Button>Criar Ponto de Reparo</Button>
        </Link>    
        <Link href="/user/sign-up">
          <Button
            size="avatar"
            className="rounded-full bg-purple.3 hover:bg-purple.3 hover:ring-4 hover:ring-purple.5/20"
          >
            <IconCafe Icon={PiUserBold} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
