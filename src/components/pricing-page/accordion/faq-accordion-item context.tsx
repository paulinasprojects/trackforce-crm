import { createContext, useContext } from 'react';

interface FaqAccordionItemContextProps {
  value: string;
  isOpen: boolean;
}


export const FaqAccordionItemContext = createContext<FaqAccordionItemContextProps | null>(null);

export function useFaqAccordionItemContext() {
  const ctx = useContext(FaqAccordionItemContext);
  if (!ctx) throw new Error("FaqAccordionItem subcomponents must be inside <FaqAccordionItem>");
  return ctx;
}