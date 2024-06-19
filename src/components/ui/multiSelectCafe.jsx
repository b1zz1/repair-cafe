"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { PiCaretDown, PiStorefront, PiCheck } from "react-icons/pi";
import IconCafe from "./iconCafe";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const dados = [
  {
    value: "Dado 1",
    label: "Dado 1",
  },
  {
    value: "Dado 2",
    label: "Dado 2",
  },
  {
    value: "Dado 3",
    label: "Dado 3",
  },
];

const MultiSelectCafe = ({ IconLeft = PiStorefront, placeholder = "Serviços", size = "m" }) => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (currentValue) => {
    setSelectedValues((prevSelected) =>
      prevSelected.includes(currentValue)
        ? prevSelected.filter((val) => val !== currentValue)
        : [...prevSelected, currentValue]
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="select"
          size="select"
        >
          <div className="flex items-center gap-4">
            <IconCafe Icon={IconLeft} />
            {selectedValues.length > 0 ? (
              selectedValues.map((val) => dados.find((dado) => dado.value === val)?.label).join(", ")
            ) : (
              <div className="text-purple.4 font-medium">{placeholder}</div>
            )}
          </div>
          <IconCafe Icon={PiCaretDown} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command size = {size}>
          <CommandInput placeholder="Pesquisar..."/>
          <CommandEmpty>
            Não foi possível encontrar
          </CommandEmpty>
          <CommandList>
            <CommandGroup>
              {dados.map((dado) => (
                <CommandItem
                  key={dado.value}
                  value={dado.value}
                  onSelect={(currentValue) => {
                    handleSelect(currentValue);
                  }}
                >
                  {dado.label}
                  {selectedValues.includes(dado.value) && (
                    <IconCafe Icon={PiCheck} className="opacity-100" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelectCafe;
