import React from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { useAccordionContext } from "./faq-accordion";
import { useFaqAccordionItemContext } from "./faq-accordion-item context";
import { cn } from "../../../lib/utils";

const FaqAccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { setOpenItem } = useAccordionContext();
    const { value, isOpen } = useFaqAccordionItemContext();

    return (
      <button
        ref={ref}
        aria-expanded={isOpen}
        onClick={() => setOpenItem(isOpen ? null : value)}
        className={cn(
          "flex w-full items-center justify-between py-3 text-sm font-medium transition-all duration-200",
          className
        )}
        {...props}
      >
        {children}
        {isOpen ?
          <FiMinus className="lg:size-8 size-7" /> : <BsPlus className="lg:size-8 size-7" />
        }
      </button>
    )
  });

export {
  FaqAccordionTrigger
};