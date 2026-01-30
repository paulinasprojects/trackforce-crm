/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react"
import type { SelectContextProps, SelectProps } from "../../../lib/types"

const FilterSelectContext = createContext<SelectContextProps | null>(null);

const FilterSelect = ({ value, onValueChange, children, ...props }: React.HTMLAttributes<HTMLDivElement> & SelectProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [open, setOpen] = useState<boolean>(false);
  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : internalValue;

  const setValue = (value: string) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value);
    setOpen(false);
  }

  return (
    <FilterSelectContext.Provider value={{ value: currentValue, setValue, open, setOpen }}>
      <div className="relative w-full" {...props}>
        {children}
      </div>
    </FilterSelectContext.Provider>
  )
}

function useFilterContext() {
  const ctx = useContext(FilterSelectContext);
  if (!ctx) throw new Error("FilterSelect sub components must be inside <FilterSelect>");
  return ctx;
};

export { FilterSelect, useFilterContext }