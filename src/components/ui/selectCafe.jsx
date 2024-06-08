"use client";

import React from "react";
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

const SelectCafe = ({ IconLeft = PiStorefront, placeholder = "Serviços", size = "m" }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
            {value ? (
              dados.find((dado) => dado.value === value)?.label
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
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {dado.label}
                  {value === dado.value && (
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

export default SelectCafe;

//precisa fazer com que o banco de dados possa ser modificavél;
