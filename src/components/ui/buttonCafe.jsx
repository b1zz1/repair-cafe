import Button from "@components/ui/button";

const ButtonCafe = ({ variant, label }) => {
  return (
    <>
      {variant == "default" && (
        <button
          className="bg-purple.5 text-neutral-50 shadow hover:bg-neutral-900/90 px-2 py-2 inline-flex items-center justify-center
                                rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-purple.1"
        >
          {label}
        </button>
      )}
      {variant == "outline" && (
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium px-2 py-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-neutral-200
                                bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default ButtonCafe;
