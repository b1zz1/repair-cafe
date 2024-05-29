import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, prepend, append, ...props }, ref) => {
  return (
    <div className="relative">
      {prepend && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple.5 text-lg">
          {prepend}
        </span>
      )}  
      <input
        type={type}
        className={cn(
          "flex bg-purple.3 font-semibold placeholder:font-medium text-purple.5 h-12 w-full rounded-md px-3 py-1 text-base shadow-sm transition-colors placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 pl-10", // Ajuste o padding para acomodar o ícone
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

export { Input };