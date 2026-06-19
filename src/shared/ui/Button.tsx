import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "h-8 rounded border px-4 text-xs transition disabled:cursor-not-allowed disabled:opacity-60",
        {
          "border-primary bg-primary text-white": variant === "primary",
          "border-slate-200 bg-white text-slate-600 hover:bg-slate-50":
            variant === "secondary",
          "border-transparent bg-transparent text-slate-500 hover:text-primary":
            variant === "ghost",
          "border-transparent bg-transparent text-red-500 hover:text-red-600":
            variant === "danger",
        },
        className,
      )}
      {...props}
    />
  );
}
