"use client";

import React from "react";
import { Button } from "./button";
import { PiFunnel, PiMapTrifold, PiSparkle } from "react-icons/pi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectCafe from "./selectCafe";
import IconCafe from "./iconCafe";

const FilterButtonCafé = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <IconCafe Icon={PiFunnel} />
        </Button>
      </PopoverTrigger>

      <PopoverContent sideOffset="1" className="bg-white.1 w-72">
        <SelectCafe> Serviço </SelectCafe>
        <SelectCafe
          IconLeft={PiSparkle}
          placeholder="Especialidade"
        ></SelectCafe>
        <SelectCafe
          IconLeft={PiMapTrifold}
          placeholder="Localização"
        ></SelectCafe>
      </PopoverContent>
    </Popover>
  );
};

export default FilterButtonCafé;
