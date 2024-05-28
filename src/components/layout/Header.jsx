import { Button } from "@/components/ui/button";
import { PiUserBold } from "react-icons/pi";
import IconCafe from "../ui/iconCafe";

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-between text-purple.5 bg-white.1 items-center px-8 shadow-header">
      <h3 className="text-2xl">Logo</h3>
      {/*Botão avatar poderá ser modificado, ao incluir o banco de dados, por isso não possui componente */}
        <Button size="avatar" className="rounded-full bg-purple.3 hover:ring-4 hover:ring-purple.5/20">
            <IconCafe Icon={PiUserBold}/>
        </Button>
    </header>
  );
};

export default Header;