import { cn } from "../../../lib/utils";
import { useAccordionContext } from "./faq-accordion"
import { FaqAccordionItemContext } from "./faq-accordion-item context"

interface FaqAccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const FaqAccordionItem = ({ value, className, children, ...props }: FaqAccordionItemProps) => {
  const { openItem } = useAccordionContext();
  const isOpen = openItem === value;

  return (
    <FaqAccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("p-2", className)}
        {...props}
      >
        {children}
      </div>
    </FaqAccordionItemContext.Provider>
  )
}

export default FaqAccordionItem