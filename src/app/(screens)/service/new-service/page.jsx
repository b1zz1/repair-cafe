import Header from "@components/layout/Header";
import WaveCafe from "@/components/ui/waveCafe";
import IconCafe from "@/components/ui/iconCafe";
import { PiStorefront } from "react-icons/pi";

const NewService = () => {
  return (
    <section className="flex w-full h-screen flex-col bg-purple.1">
      <Header />
      <main className="flex w-full h-full flex-col justify-between pt-12">
        <div className="flex h-full w-full flex-col justify-center items-center gap-10">
          <div className="w-72 flex flex-row items-center">
            <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-3 rounded-full">
              <IconCafe Icon={PiStorefront} Colors="white" />
            </div>
            <div className="bg-purple.6 h-px w-4 rounded-full"/>
            <div className="bg-purple.6 h-3 w-3 rounded-full"/>
            <div className="bg-purple.6 h-px w-4 rounded-full"/>
            <div className="bg-gradient-to-r from-purple.4 to-purple.6 p-3 rounded-full">
              <IconCafe Icon={PiStorefront} Colors="white" />
            </div>
          </div>
        </div>
        <WaveCafe variant={"alt"} />
      </main>
    </section>
  );
};

export default NewService;
