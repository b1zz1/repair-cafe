"use client";

import React from "react";
import { Button } from "./button";
import { PiFunnel, PiMapTrifold, PiSparkle } from "react-icons/pi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectCafe from "./select/selectCafe";
import IconCafe from "./iconCafe";
import MultiSelectCafe from "./select/multiSelectCafe";

const FilterButtonCafé = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <IconCafe Icon={PiFunnel} />
        </Button>
      </PopoverTrigger>

      <PopoverContent sideOffset="1" className="bg-white.1">
        <SelectCafe size="m"> Serviço </SelectCafe>
        <MultiSelectCafe
          size="m"
          IconLeft={PiSparkle}
          placeholder="Especialidade"
        ></MultiSelectCafe>
        <SelectCafe
          size="m"
          IconLeft={PiMapTrifold}
          placeholder="Localização"
        ></SelectCafe>
      </PopoverContent>
    </Popover>
  );
};

export default FilterButtonCafé;
