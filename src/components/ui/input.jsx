import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, size="full", prepend, append, ...props }, ref) => {
  const sizeClasses = {
    s: "w-[12rem]",
    m: "w-[16.4rem]",
    g: "w-[32.8rem]",
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
          "flex bg-purple.3 font-semibold placeholder:font-medium text-purple.5 h-12 rounded-md p3 py-1 text-base shadow-sm transition-colors placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 pl-10",
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