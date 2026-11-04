import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 hover:cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-r from-[#6938F5] to-[#356BFF] text-foreground p-2",
        secondary: "bg-card text-foreground hover:bg-card-hover",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "text-foreground hover:bg-card-hover",
        search:
          "bg-linear-to-r from-[#6938F5] to-[#356BFF] text-foreground p-2",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-7 py-3 text-lg",
        responsive: "px-3 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base",
        search: "px-5 py-3",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
        md: "rounded-md",
        xl: "rounded-xl",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface IButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  className,
  variant,
  size,
  rounded,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, rounded, className })}
      {...props}
    />
  );
};
