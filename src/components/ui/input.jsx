import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, size="full", prepend, append, ...props }, ref) => {
  const sizeClasses = {
    m: "w-[9.8rem] sm:w-[16.4rem]",
    g: "w-[20.85rem] sm:w-[34.05rem]",
    full: "w-full"
  }
  
  return (
    <div className="relative w-full">
      {prepend && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple.5 text-lg">
          {prepend}
        </span>
      )}  
      <input
        type={type}
        className={cn(
          "flex file:border-0 file:mr-2 file:bg-purple.3 file:text-sm file:font-medium file:text-purple.4 bg-purple.3 font-semibold placeholder:text-sm placeholder:font-medium text-purple.5 h-12 rounded-md p-3 text-base shadow-sm transition-colors placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 pl-10",
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
      {append && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-purple.5 text-lg">
          {append}
        </span>
      )}
    </div>
  );
});
Input.displayName = "Input";

export default Input;