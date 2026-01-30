import { useRef, useEffect } from "react"
import type { SelectContentProps } from "../../../lib/types"
import { useFilterContext } from "./filter-select"
import { cn } from "../../../lib/utils";

const FilterSelectContent = ({ children, className, ...props }: SelectContentProps) => {
  const { open, setOpen } = useFilterContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 z-50 mt-1 w-full rounded-sm border shadow-md max-h-60 overflow-y-auto",
        "bg-[#101010] border-gray-700",
        "animate-in fade-in-80 slide-in-from-top-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { FilterSelectContent }