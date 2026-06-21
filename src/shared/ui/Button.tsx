import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({
  className,
  variant = "secondary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "h-8 rounded border px-4 text-[12px] transition disabled:cursor-not-allowed disabled:opacity-60",
        {
          "border-primary bg-primary text-white": variant === "primary",
          "border-slate-200 bg-white text-slate-600 hover:bg-slate-50":
            variant === "secondary",
          "border-transparent bg-transparent text-[#6A6996] hover:text-[#43425D]":
            variant === "ghost",
          "border-transparent bg-transparent text-[#FF5F5F] hover:text-[#E44F4F]":
            variant === "danger",
        },
        className,
      )}
      {...props}
    />
  );
};

export { Button };
