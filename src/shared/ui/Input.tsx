import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] text-slate-400">{label}</span>

      <input
        className={clsx(
          "h-8 w-full border-b border-slate-200 bg-transparent text-xs outline-none placeholder:text-slate-300 focus:border-primary",
          error && "border-red-400",
          className,
        )}
        {...props}
      />

      {error && (
        <span className="mt-1 block text-[10px] text-red-500">{error}</span>
      )}
    </label>
  );
}
