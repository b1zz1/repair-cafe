"use client";

import * as React from "react";
import { format } from "date-fns";
import { PiCalendarDots } from "react-icons/pi";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DatePicker = ({ className, size = "full" }) => {
  const [date, setDate] = React.useState();

  const sizeClasses = {
    s: "w-[12rem]",
    m: "w-[16.4rem]",
    g: "w-[32.8rem]",
    full: "w-full",
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"select"}
          className={cn(
            "flex justify-start text-left bg-purple.3 font-medium text-purple.4 h-12 rounded-md px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50",
            !date && "",
            sizeClasses[size],
            className
          )}
        >
          <div className="flex items-center gap-2">
            <PiCalendarDots className="flex items-center  text-purple.5 text-lg" />
            {date ? format(date, "PPP") : <span>Data de Nascimento</span>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
