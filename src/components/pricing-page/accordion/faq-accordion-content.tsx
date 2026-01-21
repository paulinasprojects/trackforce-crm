import React, { useEffect, useRef, useState } from "react";
import { useFaqAccordionItemContext } from "./faq-accordion-item context";
import { cn } from "../../../lib/utils";

const FaqAccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className, children, ...props
}, ref) => {
  const { isOpen } = useFaqAccordionItemContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children, isOpen]);

  return (
    <div ref={ref}
      aria-hidden={!isOpen}
      className={cn(
        "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        maxHeight: isOpen ? `${height}px` : "0px"
      }}
      {...props}
    >
      <div className="py-2 text-sm text-gray-400" ref={contentRef}>
        {children}
      </div>
    </div>
  )
})

export {
  FaqAccordionContent
};