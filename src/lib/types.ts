import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import type React from "react";

export interface AccordionContextProps {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
}

export interface AccordionProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
  className?: string;
}

export interface SelectContextProps {
  value?: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface SelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
  className?: string;
}

export interface SelectOptionsProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export interface SelectContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

 export type Release = {
  id: string;
  title: string;
  description: string;
  date: string;
  version: string;
  tags: {
    releaseType: string;
    productArea: string;
    integration: string;
  };
  image: string;
  benefits: string[];
};
