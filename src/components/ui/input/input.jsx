import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  (
    {
      className,
      type,
      size = "full",
      prepend,
      append,
      placeholderFile = "Selecione um arquivo...",
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = React.useState("");
    const internalRef = React.useRef(null);

    const sizeClasses = {
      m: "w-[9.8rem] sm:w-[16.4rem]",
      g: "w-[20.85rem] sm:w-[34.05rem]",
      full: "w-full",
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name);
      } else {
        setFileName("");
      }
    };

    const handleClick = () => {
      if (internalRef.current) {
        internalRef.current.click();
      }
    };

    return (
      <div className={`relative w-full ${sizeClasses[size]}`}>
        {prepend && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple.5 text-lg">
            {prepend}
          </span>
        )}
        {type === "file" ? (
          <div className="flex items-center w-full">
            <input
              type="file"
              className="hidden"
              ref={internalRef}
              onChange={handleFileChange}
              {...props}
            />
            <input
              type="text"
              className={cn(
                "flex items-center bg-purple.3  font-semibold placeholder:text-purple.4 placeholder:text-sm placeholder:font-medium text-purple.5 h-12 rounded-md p-3 text-base shadow-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-10 cursor-pointer",
                sizeClasses[size],
                className
              )}
              placeholder={placeholderFile}
              value={fileName}
              readOnly
              onClick={handleClick}
            />
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              "flex  bg-purple.3 autofill:bg-purple.5 font-semibold placeholder:text-sm placeholder:font-medium text-purple.5 h-12 rounded-md p-3 text-base shadow-sm transition-colors placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 pl-10",
              sizeClasses[size],
              className
            )}
            ref={internalRef}
            {...props}
          />
        )}
        {append && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-purple.5 text-lg">
            {append}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
