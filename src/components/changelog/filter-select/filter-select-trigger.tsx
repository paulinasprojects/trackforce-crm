import React from "react"
import type { SelectTriggerProps } from "../../../lib/types"
import { useFilterContext } from "./filter-select"
import { cn } from "../../../lib/utils";
import { IoChevronDown } from "react-icons/io5";

const FilterSelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ placeholder, className, ...props }, ref) => {
    const { open, setOpen, value } = useFilterContext();

    return (
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between w-full whitespace-nowrap px-3 py-2 border rounded-md text-sm",
          "bg-[#101010] border-[#383838]",
          "hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className={cn(value ? "text-gray-100" : "text-gray-400")}>
          {value || <span className="text-gray-500">{placeholder}</span>}
        </span>
        <IoChevronDown
          className={cn(
            "w-4 h-4 text-white transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
    )
  }
)

export { FilterSelectTrigger }