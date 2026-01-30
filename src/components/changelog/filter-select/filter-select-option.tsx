import React from "react"
import type { SelectOptionsProps } from "../../../lib/types"
import { useFilterContext } from "./filter-select"
import { cn } from "../../../lib/utils";

const FilterSelectOption = React.forwardRef<HTMLDivElement, SelectOptionsProps>(
  ({ className, children, value, ...props }, ref) => {
    const { setValue, value: selectedValue } = useFilterContext();
    const isSelected = selectedValue === value;

    return (
      <div
        role="option"
        onClick={() => setValue(value)}
        onKeyDown={(e) =>
          e.key === "Enter" && setValue(value)}
        ref={ref}
        {...props}
        className={cn(
          "px-3 py-2 text-sm cursor-pointer transition-colors rounded-[4px] mx-1 my-0.5",
          isSelected ? "bg-black/90 text-white" : "text-gray-200 hover:bg-gray-800",
          className
        )}
        tabIndex={0}
      >
        {children}
      </div>
    )
  }
)

export { FilterSelectOption }