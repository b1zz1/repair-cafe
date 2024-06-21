import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, size, register, ...props }, ref) => {
  const sizeClasses = {
    m: "w-[9.8rem] sm:w-[16.4rem]",
    g: "w-[20.85rem] sm:w-[34.05rem]",
    full: "w-full",
  };
  return (
    <textarea
      className={cn(
        "flex min-h-32 bg-purple.3 font-semibold placeholder:font-medium text-purple.5 h-12 rounded-md p-3 py-2 text-sm shadow-sm transition-colors placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 resize-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
      {...(register ? register(props?.name || '') : {})}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
