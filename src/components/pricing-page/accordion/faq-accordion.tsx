/* eslint-disable react-refresh/only-export-components */
import React, { useContext, createContext, useState } from 'react';
import type { AccordionContextProps, AccordionProps } from '../../../lib/types';

const FaqAccordionContext = createContext<AccordionContextProps | null>(null);

const FaqAccordion = ({ value, defaultValue, onValueChange, children, className, ...props }: React.ComponentProps<"div"> & AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue || null);
  const isControlled = value !== undefined;
  const openItem = isControlled ? value : internalValue;

  const setOpenItem = (value: string | null) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value);
  }

  return (
    <FaqAccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={className}
        {...props}
      >
        {children}
      </div>
    </FaqAccordionContext.Provider>
  )
}

function useAccordionContext() {
  const ctx = useContext(FaqAccordionContext);
  if (!ctx) throw new Error("FaqAccordion subcomponents must be used inside <FaqAccordion>");
  return ctx;
}

export { FaqAccordion, useAccordionContext }