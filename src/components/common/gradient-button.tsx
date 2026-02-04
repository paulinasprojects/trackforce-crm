import { cn } from "../../lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const GradientButton = ({ className, children, disabled, ...props }: Props) => {
  return (
    <button
      className={cn("button-gradient text-white px-6 py-2.5 rounded-md font-medium text-sm leading-xl hover:text-white/90 transition duration-200", className)}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  )
}


export default GradientButton