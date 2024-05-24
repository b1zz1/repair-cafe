import { Button } from "@/components/ui/button";
import { PiUserBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex w-full h-20 justify-between text-purple.5 bg-white.1 items-center px-8">
      <h3 className="text-2xl">Logo</h3>
        <Button size="avatar" className="rounded-full bg-purple.3 hover:ring-4 hover:ring-purple.5/40">
            <PiUserBold className="h-5 w-5" />
        </Button>
    </header>
  );
};

export default Header;

//focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5