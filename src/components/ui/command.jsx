"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

import IconCafe from "./iconCafe";
import { Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { PiMagnifyingGlass } from "react-icons/pi";

const Command = React.forwardRef(({ className, size = "m", ...props }, ref) => {
  const sizeClasses = {
    m: "w-[9.8rem] sm:w-[16.4rem]",
    g: "w-[20.85rem] sm:w-[34.05rem]",
    full: "w-full",
  };

  return (
    <CommandPrimitive
      ref={ref}
      className={`flex h-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 w-[32.8rem] ${sizeClasses[size]}`}
      {...props}
    />
  );
});
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 w-full">
        <Command className="w-full">{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className="flex items-center border-b border-purple.2/40 px-3 gap-2"
    cmdk-input-wrapper=""
  >
    <IconCafe Icon={PiMagnifyingGlass} />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3  outline-none placeholder:text-purple.4 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn("overflow-hidden p-1 ", className)}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-purple.2", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm font-medium text-white.4 outline-none aria-selected:bg-purple.4/10 aria-selected:text-purple.5  aria-selected:font-semibold data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 ",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs text-neutral-500 dark:text-neutral-400",
        className
      )}
      {...props}
    />
  );
};

CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
